//首先就实现加载页面内容就可以了
// 加载 HTML 内容

async function loadContent(filename) {  //定义函数loadContent
    const response = await fetch(filename);  // 从当前目录加载 HTML 文件
    const htmlContent = await response.text(); // 获取 HTML 内容
    document.getElementById('main-content').innerHTML = htmlContent;  // 渲染到主内容区
}

// 默认加载首页内容
loadContent('/contents/home.html');

//javascript文件在网页呈现中的本质其实就是函数的文件载体