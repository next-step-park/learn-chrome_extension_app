function clickBtn1() {
    let num = document.form1.select1.selectedIndex;
    let str = document.form1.select1.options[num].value;
    document.getElementById('title').textContent = str;
}