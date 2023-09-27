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
              kendo.drawing.pdf.saveAs(group, 'NA_Approval.pdf');
            });
          }
          function composeOutlookEmail() {
                const to = "payroll@canthomecare.com";
                const cc = "Israt.jahan@candthomecare.com";
                const subject = "QB: "+ document.getElementById("qbID").value + " / " + document.getElementById("wID").value + " / "  + "Regarding NA approval for the DOS: " + document.getElementById("dt").value;
                const body = "Hope this email finds you well.\n\n" + document.getElementById("reasonOfApproval").value + "\n\nIt would be really great if you could verify the TS with NA approval.";
    
                // Construct the mailto URL
                const mailtoUrl = `mailto:${to}?cc=${cc}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                QB: 5896 // Regarding NA approval.
                // Open the mail client
                window.location.href = mailtoUrl;
            }

    