   // Import DejaVu Sans font for embedding

        // NOTE: Only required if the Kendo UI stylesheets are loaded
        // from a different origin, e.g. cdn.kendostatic.com
        kendo.pdf.defineFont({
          "DejaVu Sans"             : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans.ttf",
          "DejaVu Sans|Bold"        : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Bold.ttf",
          "DejaVu Sans|Bold|Italic" : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
          "DejaVu Sans|Italic"      : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf"
      });
  

      function getPDF(selector) {
          kendo.drawing.drawDOM($(selector)).then(function(group){
            kendo.drawing.pdf.saveAs(group, 'NA_Approval_'+ document.getElementById("qbID").value +'_' + document.getElementById("dt").value +'.pdf');
            
            const to = "payroll@canthomecare.com";
            const cc = "israt.jahan@candthomecare.com";
            const subject = "QB: "+ document.getElementById("qbID").value + " / " + document.getElementById("wID").value + " / "  + "Regarding NA approval for the DOS: " + document.getElementById("dt").value;
            const body = "Dear Team, \n\nHope this email finds you well." + document.getElementById("reason").value + "\n\nTherefore, It would be really great if you could verify the TS with NA approval.";
            document.getElementById("TO").textContent = to;
            document.getElementById("Cc").textContent = cc;
            document.getElementById("sub").textContent = subject;
            document.getElementById("ebody").textContent = body;
            const emailPurDivs = document.querySelectorAll('.emailPur');
            emailPurDivs.forEach((div) => {
              div.style.display = 'flex';
          });

          });
        }
        function composeOutlookEmail() {
              const to = "payroll@canthomecare.com";
              const cc = "israt.jahan@candthomecare.com";
              const subject = "QB: "+ document.getElementById("qbID").value + " / " + document.getElementById("wID").value + " / "  + "Regarding NA approval for the DOS: " + document.getElementById("dt").value;
              const body = "Hope this email finds you well.\n\n" + document.getElementById("reasonOfApproval").value + "\n\nIt would be really great if you could verify the TS with NA approval.";
  
              // Construct the mailto URL
              const mailtoUrl = `mailto:${to}?cc=${cc}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              // QB: 5896 // Regarding NA approval.
              // Open the mail client
              window.location.href = mailtoUrl;
             
          }


          const cpyClickElements = document.querySelectorAll('.cpyclick');

cpyClickElements.forEach((element) => {
    element.addEventListener('click', function () {
        // Create a textarea element to hold the text
        const textarea = document.createElement('textarea');
        
        if (element.tagName === 'H4') {
            // If the element is an <h4>, extract its text content
            textarea.value = element.textContent;
        } else if (element.tagName === 'TEXTAREA') {
            // If the element is a <textarea>, use its value
            textarea.value = element.value;
        }
        
        // Append the textarea to the document
        document.body.appendChild(textarea);

        // Select the text within the textarea
        textarea.select();

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the textarea from the document
        document.body.removeChild(textarea);

        // Show an alert indicating that the text has been copied
        alert('Text Copied!');
    });

    element.addEventListener('mouseenter', function () {
        // Display a hover message
        element.title = 'Click on the text to Copy';
    });
});
