  (function ($) {
    // Find duplicate IDs
    function findAndFixDuplicateIds() {
        var idMap = {};
        var duplicateIds = [];
    
        // Iterate through all elements
        $('[id]').each(function () {
        var id = this.id;
    
        // Check if the ID already exists in the map
        if (idMap[id] === undefined) {
            idMap[id] = true;
        } else {
            duplicateIds.push(id);
        }
        });
    
        // Fix duplicate IDs by appending a unique suffix
        for (var i = 0; i < duplicateIds.length; i++) {
        var duplicateId = duplicateIds[i];
        $('[id="' + duplicateId + '"]').each(function (index) {
            if (index > 0) {
            $(this).attr('id', duplicateId + '_fix' + index);
            }
        });
        }
    }
    $(document).ready(function () {
      findAndFixDuplicateIds();
    });
  })(jQuery);