// js/activity.js

$(document).ready(function() {
    // 1. Make activity cells selectable, except not-available and header cells
    // This part ensures that only valid cells can be clicked and processed
    $('table tbody td').each(function() {
        if (!$(this).hasClass('not-available')) {
            $(this).addClass('selectable');
        }
    });

    // 2. Toggle selection on click and handle display box visibility and content
    $('table').on('click', 'td.selectable', function() {
        // Toggle the 'selected' class for visual feedback
        $(this).toggleClass('selected');

        var activityContent = $(this).text(); // Get the text of the clicked cell
        var cliffSiteName = ""; // Initialize cliff site name

        // Determine if the clicked cell is in the first column (Activity) or a cliff site column
        var columnIndex = $(this).index(); // Get the index of the clicked column (0-indexed)

        // If the column index is greater than 0, it means it's a cliff site column
        if (columnIndex > 0) {
            // Get the text from the corresponding <th> in the table header (cliff site name)
            // .eq(columnIndex) selects the header cell at the same column index
            cliffSiteName = $("thead th").eq(columnIndex).text();
        }

        // Prepare the display text for the list
        var displayItemText = activityContent;
        if (cliffSiteName && cliffSiteName !== "Activity") { // Ensure cliffSiteName is not empty and not the "Activity" header
            displayItemText = activityContent + " at " + cliffSiteName;
        }

        // Get the result display area
        var $resultDiv = $('#result');
        var $displaySelectedBox = $('#displaySelected');

        if ($(this).hasClass("selected")) {
            // Cell was just selected
            $displaySelectedBox.css("visibility", "visible"); // Make display box visible
            $displaySelectedBox.css("margin-top", "2em"); // Add space above display box

            // Append the selected activity with its cliff site to the results
            $resultDiv.append("<p>" + displayItemText + "</p>");

        } else {
            // Cell was just deselected

            // Remove the corresponding paragraph from the results
            // We use :contains() to find the paragraph with the exact text that was added
            $resultDiv.find('p:contains("' + displayItemText + '")').remove();

            // Check if there are any activities left in the list
            if ($resultDiv.has('p').length === 0) {
                // No activities left, hide the display box
                $displaySelectedBox.css("visibility", "hidden");
                $displaySelectedBox.css("margin-top", "0");
            }
        }
    });
});