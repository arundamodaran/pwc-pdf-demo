const path = require('path');
const pdfFillForm = require('pdf-fill-form');
const fs = require('fs');
const async = require('async');


const mapToPDFFormJson = (data) => {
  return {
    MN2_F1_OrdinaryShares: data.OrdinaryShare,
    DH_InstCode: data.InstCode,
    DH_RepCycle: data.ReportingCycle,
  };
};


const fillMas1Form = (d, mainCallback) => {

  console.log(__dirname);
  const sourceMas1PDF = path.join(__dirname, '../public/assets', 'masForm1.pdf');
  if (!fs.existsSync(sourceMas1PDF)) {
      throw new Error('sourceMas1PDF File missing!!!');
  }
  const fillData = mapToPDFFormJson(d);
  const destinationPDF = path.join(__dirname, '../public/assets', 'filledForm.pdf');

  const destinationData = pdfFillForm.writeSync(sourceMas1PDF, fillData, { "save": "pdf" } );
  fs.writeFile(destinationPDF, destinationData, (err, data) => {
    if(err) {
      throw err;
    }
    mainCallback(null, data);
  });
}

module.exports = {fillMas1Form};