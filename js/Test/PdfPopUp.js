function pdfPopUp(PdfUrl){
    TestUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    document.getElementById("pdfPopUp").src = TestUrl;
    $("#pupOutWindow").modal();
}
