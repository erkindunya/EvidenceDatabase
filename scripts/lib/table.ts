import { sp, Web } from './sp';
import { Items, PagedItemCollection } from 'sp-pnp-js/lib/pnp';
import * as $ from 'jquery';
import * as toastr from 'toastr';

const web = new Web('https://uat-ext.kier.co.uk/sites/projects');


export interface SharePointDataTableColumn {
  title: string;
  renderer: (row: any) => Promise<string>;
}

export class SharePointDataTable {
  private table: JQuery<HTMLElement>;
  private pagedCollections: PagedItemCollection<any>[] = [];
  protected page: number = 0;
  /**
   *
   * Creates a pages datatable from 
   * 
   */
  constructor(private collection: Items,
              private columns: SharePointDataTableColumn[],
              private element: JQuery<HTMLElement>,
              private nextElement: JQuery<HTMLElement>,
              private previousElement: JQuery<HTMLElement>) {
    let table = $('<table></table>');
    table = table.append(this.createHeader(columns));
    table = table.append($(`<tbody><tr><td colspan="${columns.length}"></td></tr></tbody>`));
    this.table = table;


    const pagedCollection = collection.top(10).orderBy('Created', false).getPaged()
      .then((collection: PagedItemCollection<any>) => {
        this.pagedCollections = [collection];
        this.updateBody().then((result) => {
          toastr.clear();
          toastr.success('Page loaded.');
        }).catch((error) => {
          console.log(error);
          toastr.error('Items failed to render.');
        });
      }).catch((error) => {
        toastr.error('Page failed to load.');
      });
    element.empty().append(this.table);
    
    this.nextElement.click((event) => {
      event.preventDefault();
      this.getNext();
    });

    this.previousElement.click((event) => {
      event.preventDefault();
      this.getPrevious();
    });

    this.enableButtons();
  }

  public filter(query: string, columns: string[]) {
    let filter = '';

    for (const column of columns) {
      filter += `startsWith(${column},'${escape(query)}') OR `;
    }

    filter = filter.slice(0, -4);

    const pagedCollection = this.collection.top(10).filter(filter).getPaged()
      .then((collection: PagedItemCollection<any>) => {
        this.pagedCollections = [collection];
        this.page = 0;
        this.updateBody().then((result) => {
          toastr.clear();
          toastr.success('Page loaded.');
        }).catch((error) => {
          console.log(error);
          toastr.error('Items failed to render.');
        });
      }).catch((error) => {
        toastr.error('Page failed to load.');
      });
  }

  public getPrevious() {
    this.disableButtons();
    console.log('Getting previous page.');
    // if null then currently being got
    if (this.pagedCollections[this.page] === null) {
      toastr.warning('Page currently being loaded. Please wait.');
      return;
    }
    // if it doesnt have next then cant get next
    if (!this.hasPrevious()) {
      toastr.warning('No previous pages.');
      return;
    }

    toastr.info('Loading previous page.');
    this.page -= 1;
    this.updateBody().then((result) => {
      toastr.clear();
      toastr.success('Page loaded.');
    }).catch((error) => {
      console.log(error);
      toastr.error('Items failed to render.');
    });
  }

  public getNext() {
    this.disableButtons();

    console.log('Getting next page.');
    // if null then currently being got
    if (this.pagedCollections[this.page] === null) {
      toastr.warning('Page currently being loaded. Please wait.');
      return;
    }
    // if it doesnt have next then cant get next
    if (!this.hasNext()) {
      toastr.warning('No more pages.');
      return;
    }

    toastr.info('Loading next page.');
    // has page already been downloaded?
    if (this.pagedCollections[this.page + 1] !== undefined) {
      console.log('Page already loaded');
      this.page += 1;
      this.updateBody().then((result) => {
        toastr.clear();
        toastr.success('Page loaded.');
      }).catch((error) => {
        console.log(error);
        toastr.error('Items failed to render.');
      });
      return;
    }

    const currentCollection = this.pagedCollections[this.page];
    this.page += 1;
    this.pagedCollections.push(null);
    currentCollection.getNext()
      .then(async (collection) => {
        this.pagedCollections[this.page] = collection;
        try {
          await this.updateBody();
          toastr.clear();
          toastr.success('Page loaded.');
        } catch (e) {
          toastr.error('Items failed to render.');
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error('Page failed to load.');
      });
  }

  public hasPrevious(): boolean {
    return this.page > 0;
  }

  public hasNext(): boolean {
    if (this.pagedCollections[this.page] === undefined)
      return false;
    return this.pagedCollections[this.page].hasNext;
  }

  private createHeader(columns: SharePointDataTableColumn[]): JQuery<HTMLElement> {
    let $header = $('<thead></thead>');
    let $row = $('<tr></tr>');
    columns.forEach((column) => {
      $row = $row.append(`<th>${column.title}</th>`);
    });
    $header = $header.append($row);
    return $header;
  }

  private async createBody(rows: any[],
                           columns: SharePointDataTableColumn[]): Promise<JQuery<HTMLElement>> {
    let $body = $('<tbody></tbody>');
    for (const row of rows) {
      let $row = $('<tr></tr>');
      for (const column of columns) {
        $row = $row.append(`<td>${await column.renderer(row)}</td>`);
      }
      $body = $body.append($row);
    }
    return $body;
  }

  private async updateBody() {
    const $body = await this.createBody(
      this.pagedCollections[this.page].results,
      this.columns);

    this.table.find('tbody').replaceWith($body);
    this.element.empty().append(this.table);
    this.enableButtons();
  }

  private disableButtons() {
    if (this.previousElement)
      this.previousElement.prop('disabled', 'disabled');
    if (this.nextElement)
      this.nextElement.prop('disabled', 'disabled');
  }

  private enableButtons() {
    if (this.previousElement) {
      if (this.hasPrevious()) {
        this.previousElement.show();
        this.previousElement.prop('disabled', false);
      } else {
        this.previousElement.hide();
      }
    }

    if (this.nextElement) {
      if (this.hasNext()) {
        this.nextElement.show();
        this.nextElement.prop('disabled', false);
      } else {
        this.nextElement.hide();
      }
    }
  }
}
