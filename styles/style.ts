export class Style {
  left:any = 'Left';
  bold:any = 'bold';
  table = {
    borderSpacing: 0,
    width: '100%',
    fontFamily : 'Arial, Helvetica, sans-serif',
    fontSize: 12,
    borderColor: 'grey',
  };
  tableThead = {
    textAlign: this.left,
    paddingLeft: 20,
  };
  tableTheadTh = {
    fontSize:'14.0pt',
    fontFamily: 'Franklin Gothic Book ,sans-serif',
    color: '#ffffff',
    padding: '15px 25px 15px 5px',
    background: '#007B86',
  };
  tableTr = {
    display: 'table-row',
    verticalAlign: 'inherit',
    borderColor: 'inherit',
    color: '#44546A',
  };
  tableTd = {
    border: 'solid #939598 1.0pt',
    borderTop: 'none',
    padding: 5,
  };
  tableTdFirstChild = {
    border: 'solid #939598 1.0pt',
    borderTop: 'none',
    padding: 5,
    width: '20.38%',
    textAlign: this.left,
    borderRight: 0,
  }; 
      
  tableRowGreen = {
    fontWeight: this.bold,
    border:'solid #939598 1.0pt',
    fontSize: '11.0pt',
    fontFamily: 'Franklin Gothic Book,sans-serif',
    color: '#ffffff',
    padding: '5px',
    background: '#61A706',
  };

  tableRowGrey = {
    borderTop: 'none',
    padding: 5,
    border:'solid #939598 1.0pt',
    background: '#E6E7E8',
  };

  tableRowPurple = {
    border: 'solid #939598 1.0pt',
    borderTop: 'none',
    color: '#ffffff',
    borderSolid: '#939598 1.0pt',
    background: '#8D204F',
    fontSize: '11.0pt',
    fontFamily: 'Franklin Gothic Book,sans-serif',
    padding: 5,
  };

  tableRowBlue = {
    fontWeight: this.bold,
    border:'solid #939598 1.0pt',
    borderTop: 'none',
    background: '#DCECEE',
    padding: 5,
  };

  tableRowEmpty = {
    border: 'none',
    padding: '15px 25px 15px 4px',
  };

  tableHideBulletPoint = {
    listStyle: 'none',
    listStyleType: 'none',
    backgroundImage:'none',
    backgroundRepeat:'none',
    backgroundPosition:0,
    margin: 0,
    padding: 0,
    display: 'inline-block',
    align:'left',
    // textAlign:'left',
  };
  removeStyle = {
    display:'none',
  }
}




