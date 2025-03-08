//首先就实现加载页面内容就可以了

async function loadContent(filename) {
    const response = await fetch(filename);   //从当前目录加载文件（如果后续有增文件夹的要求，则要记得更改）
    const mdText = await response.text();   //直接读取markdown格式文件的内容
    const htmlContent = marked.parse(mdText);  //将markdown转化成HTML
    document.getElementById('main-content').innerHTML = htmlContent;  // 显示到页面
}

//默认加载的是：
loadContent('home.md');

//javascript文件在网页呈现中的本质其实就是函数的文件载体