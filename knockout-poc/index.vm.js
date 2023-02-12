var myVM = {

}


marker.alias = ko.computed(function () {
    if (marker.column === '--Select a')
        return 'marker-name';
    else
        return marker.column;
}, this);