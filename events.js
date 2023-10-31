const expandableRows = document.querySelectorAll('.expandable');
const expandedInfo = document.getElementById('expandedInfo');

expandableRows.forEach((row) => {
    row.addEventListener('click', () => {
        if (row.classList.contains('expanded')) {
            row.classList.remove('expanded');
            expandedInfo.style.display = 'none';
        } else {
            expandableRows.forEach((r) => r.classList.remove('expanded'));
            row.classList.add('expanded');
            expandedInfo.style.display = 'block';
        }
    });
});
