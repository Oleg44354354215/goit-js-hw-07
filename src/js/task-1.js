const vora = document.querySelectorAll('#categories .item')
console.log(`Number of categories: ${vora.length}`)

vora.forEach(vork => {
    const Title = vork.querySelector('h2').textContent;
    const Elements = vork.querySelectorAll('ul li').length;
    console.log(`Category: ${Title}`);
    console.log(`Elements: ${Elements}`);
  });