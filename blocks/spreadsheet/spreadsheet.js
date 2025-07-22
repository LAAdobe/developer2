export default async function decorate(block) {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNckOOHjeUnWJCU3viJSU0bo5QdStdNaz7ZX-4GF8s-B_B7210lwgDx6IB_h5yyNjNG4TnVPi9bFYM/pub?output=csv'; // Replace with your actual CSV link
  const resp = await fetch(url);
  const text = await resp.text();
  const rows = text.trim().split('\n').map(row => row.split(','));

  const table = document.createElement('table');
  rows.forEach((row, i) => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const cellEl = document.createElement(i === 0 ? 'th' : 'td');
      cellEl.textContent = cell;
      tr.appendChild(cellEl);
    });
    table.appendChild(tr);
  });

  block.appendChild(table);
}
