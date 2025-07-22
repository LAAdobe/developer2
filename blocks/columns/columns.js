// export default function decorate(block) {
function decorate(block) {

  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}

// Auto-enhance simple 2-column tables for demo
document.querySelectorAll('table').forEach((table) => {
  const firstRow = table.rows[0];
  if (firstRow && firstRow.cells.length === 2) {
    table.classList.add('columns-block');
  }
});
