// js/activity.js

$(document).ready(function() {
    // 1. Make activity cells selectable, except not-available and header cells
    $('table tbody td').each(function() {
        if (!$(this).hasClass('not-available')) {
            $(this).addClass('selectable');
        }
    });

    // Array to store selected activities
    var selectedActivities = [];

    // 2. Toggle selection on click and handle modal display
    $('table').on('click', 'td.selectable', function() {
        $(this).toggleClass('selected');

        var activityContent = $(this).text();
        var rowIndex = $(this).closest('tr').index(); // Get row index
        var activityType = $('table tbody tr').eq(rowIndex).find('td:first').text(); // Get activity type from first column of the row

        var columnIndex = $(this).index();
        var cliffSiteName = $("thead th").eq(columnIndex).text();

        var displayItemText = activityType + " at " + cliffSiteName;

        if ($(this).hasClass("selected")) {
            // Add to selected activities
            selectedActivities.push(displayItemText);
        } else {
            // Remove from selected activities
            selectedActivities = $.grep(selectedActivities, function(value) {
                return value !== displayItemText;
            });
        }

        // Update modal content
        var $modalActivitiesList = $('#modalActivitiesList');
        $modalActivitiesList.empty(); // Clear previous list

        if (selectedActivities.length > 0) {
            $.each(selectedActivities, function(index, item) {
                $modalActivitiesList.append("<p>" + item + "</p>");
            });
            // Show the modal if activities are selected
            $('#selectedActivitiesModal').modal('show');
        } else {
            // Hide the modal if no activities are selected
            $('#selectedActivitiesModal').modal('hide');
        }
    });

    // Optional: Handle "Get Info" button click in modal
    $('#modalGetInfoBtn').on('click', function() {
        var email = $('#modalEmailInput').val();
        if (email) {
            alert("Information for: " + selectedActivities.join(", ") + " will be sent to " + email);
            // Here you would typically send the data via AJAX or a form submission
            $('#selectedActivitiesModal').modal('hide'); // Hide modal after "getting info"
        } else {
            alert("Please enter your email address.");
        }
    });

    // Optional: Clear selections when modal is hidden (e.g., by close button or clicking outside)
    $('#selectedActivitiesModal').on('hidden.bs.modal', function (e) {
        if (selectedActivities.length === 0) { // Only clear selected visual if modal was empty before hiding
             $('table td.selected').removeClass('selected');
        }
    });
});