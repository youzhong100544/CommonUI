/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


console.log("#################################################################################################################");
console.log("# Start - CommonUI-Blog.js #");
console.log("#################################################################################################################");

// 枚举 - 布局样式
const layoutStyleEnum = {
    DEFAULT: 'default',
    LAYOUT_STYLE_GRID: 'layout-style-grid',
    LAYOUT_STYLE_GRID_SCALABLE: 'layout-style-grid-scalable'
};

/**
 * 按下鼠标拖拽 div
 * 
 * clientWidth
 *      clientWidth = Content_Width + padding - scollbarWidth
 * 
 * clientHeight
 *      clientHeight = content_Height + padding - scollbarWidth
 * 
 * clientLeft
 *      clientLeft = border
 *      如果当前元素是行内元素(inline)时, clientLeft将返回 0;
 * 
 * offsetWidth 和 offsetHeight
 *      offsetWidth：直接返回元素本身的宽度，
 *      offsetHeight：直接返回元素本身的高度。
 *      这两个属性的值只与该元素有关， 与周围的元素（父级与子级元素无关）
 * 
 * offsetLeft 和 offsetTop
 *      这两个属性与 offsetParent 有关，解释为返回该元素边界的左上角顶点相对于offsetParent的左上角顶点的水平偏移量和垂直偏移量。
 * 
 * 
 * @param {HTMLElement} triggerElement  按下鼠标触发拖拽的元素
 * @param {HTMLElement} moveElement     需要移动的元素
 */
function fn_drag(triggerElement, moveElement){

    if (!triggerElement || !resizeElement) {
        return false;
    }

    let bDrag = false;

    let disX = 0;
    let disY = 0;

    // 移动轨迹
    let aPos = [
        {
            x: moveElement.offsetLeft, 
            y: moveElement.offsetTop
        }
    ];
    
    // 鼠标按下, 激活拖拽
    triggerElement.onmousedown = function (event){        
        var event = event || window.event;

        bDrag = true;

        disX = event.clientX - moveElement.offsetLeft;
        disY = event.clientY - moveElement.offsetTop;  

        aPos.push({x:moveElement.offsetLeft, y:moveElement.offsetTop});
        
        this.setCapture && this.setCapture();        
        return false;
    };
    
    // 拖拽开始
    document.onmousemove = function (event){
        if (!bDrag) {
            return;
        }

        var event = event || window.event;
        var iL = event.clientX - disX;
        var iT = event.clientY - disY;

        // Document.documentElement 返回 document 的根元素（例如，HTML 文档的 <html> 元素）。
        var maxL = document.documentElement.clientWidth - moveElement.offsetWidth;
        var maxT = document.documentElement.clientHeight - moveElement.offsetHeight;
        
        iL = iL < 0 ? 0 : iL;
        iL = iL > maxL ? maxL : iL; 
        
        iT = iT < 0 ? 0 : iT;
        iT = iT > maxT ? maxT : iT;
        
        moveElement.style.marginTop = moveElement.style.marginLeft = 0;
        moveElement.style.left = iL + "px";
        moveElement.style.top = iT + "px"; 

        aPos.push({x:iL, y:iT})
        
        return false;
    };

    // 鼠标释放, 结束拖拽
    document.onmouseup = window.onblur = triggerElement.onlosecapture = function (){
        bDrag = false;                
        triggerElement.releaseCapture && triggerElement.releaseCapture();
    };

}


/**
 * 鼠标按下拖拽时调整 lauout 布局大小
 * 
 * @param {Element} triggerElement 
 * @param {Element} resizeElement 
 * @param {boolean} resizeHorizontal 水平方向
 * @param {boolean} resizeVertical 垂直方向
 */
function fn_resize_grid_lauout(
    triggerElement, 
    resizeElement, 
    resizeHorizontal = false, 
    resizeVertical = false
){

    if (!triggerElement || !resizeElement) {
        return false;
    }

    var bDrag = false;

    let disX = 0;
    let disY = 0;

    let currentOffsetWidth_Logo = 0;
    let currentOffsetHeight_Logo = 0;

    // 鼠标按下, 激活拖拽
    triggerElement.onmousedown = function (event){        
        var event = event || window.event;

        bDrag = true;

        disX = event.clientX - resizeElement.offsetLeft;
        disY = event.clientY - resizeElement.offsetTop;

        // console.log("disX = " + disX + ", disY = " + disY);

        currentOffsetWidth_Logo = getComputedStyle(document.documentElement).getPropertyValue('--layout-of-logo-width').split('px')[0];
        currentOffsetHeight_Logo = getComputedStyle(document.documentElement).getPropertyValue('--layout-of-logo-height').split('px')[0];
        
        // console.log("currentOffsetWidth_Logo = " + currentOffsetWidth_Logo + ", currentOffsetHeight_Logo = " + currentOffsetHeight_Logo);

        this.setCapture && this.setCapture(); 
        
        // 拖拽开始
        document.onmousemove = function (event){
            if (!bDrag) {
                return;
            }

            var event = event || window.event;
            var iL = event.clientX - disX;
            var iT = event.clientY - disY;

            // console.log("iL = " + iL + ", iT = " + iT);

            // Document.documentElement 返回 document 的根元素（例如，HTML 文档的 <html> 元素）。
            // var maxL = document.documentElement.clientWidth - resizeElement.offsetWidth;
            // var maxT = document.documentElement.clientHeight - resizeElement.offsetHeight;
            
            // iL = iL < 0 ? 0 : iL;
            // iL = iL > maxL ? maxL : iL; 
            
            // iT = iT < 0 ? 0 : iT;
            // iT = iT > maxT ? maxT : iT;

            let width = Number.parseInt(currentOffsetWidth_Logo) + Number.parseInt(iL);
            let height = Number.parseInt(currentOffsetHeight_Logo) + Number.parseInt(iT);

            // console.log("width = " + width + ", height = " + height);

            if (resizeHorizontal) {
                document.documentElement.style.setProperty('--layout-of-logo-width', width);
                resizeElement.style.gridTemplateColumns = width + "px var(--layout-of-spacer) 1fr";
            }
            
            if (resizeVertical) {
                document.documentElement.style.setProperty('--layout-of-logo-height', height);
                resizeElement.style.gridTemplateRows = height + "px var(--layout-of-spacer) 1fr";
            }
            
            
            return false;
        };

        // 鼠标释放, 结束拖拽
        document.onmouseup = window.onblur = triggerElement.onlosecapture = function (){
            bDrag = false;                
            triggerElement.releaseCapture && triggerElement.releaseCapture();
        };

        return false;
    };

}

/**
 * 切换布局样式
 * 
 * @param {layoutStyleEnum} layoutStyle 
 */
var fn_toggle_layout_style = (layoutStyle) => {
    switch (layoutStyle) {
        case layoutStyleEnum.DEFAULT:
            console.log('dafault');
            break;
        case layoutStyleEnum.LAYOUT_STYLE_GRID:
        case layoutStyleEnum.LAYOUT_STYLE_GRID_SCALABLE:
            console.log('Mangoes and papayas are $2.79 a pound.');
            break;
        default:
            console.log('dafault');
    }
}

console.log("= End - CommonUI-Blog.js =======================================================================================");

/* 
window.onload = function () {

    const var_element_layout_layout = document.querySelector('.admin-layout.layout-style-grid-scalable');
    
    if (var_element_layout_layout) {
        const var_div_element_layout_spacer_center = document.createElement('div');
        var_div_element_layout_spacer_center.setAttribute('id', 'layout-spacer-center1');
        var_div_element_layout_spacer_center.setAttribute('class', 'layout-spacer-center1');
        var_element_layout_layout.appendChild(var_div_element_layout_spacer_center);
    }
    
    const var_element_layout_spacer_center = document.querySelector('.admin-layout.layout-style-grid-scalable > .layout-spacer-center');
    if (var_element_layout_spacer_center) {
        fn_resize_grid_lauout(
            var_element_layout_spacer_center, 
            var_element_layout_layout, 
            true, 
            true
        );
    }

    const var_element_layout_spacer_up = document.querySelector('.admin-layout.layout-style-grid-scalable > .layout-spacer-up');
    if (var_element_layout_spacer_up) {
        fn_resize_grid_lauout(
            // triggerElement = var_element_layout_spacer_up, 
            // resizeElement = var_element_layout_layout, 
            // resizeHorizontal = true, 
            // resizeVertical = false
            var_element_layout_spacer_up, 
            var_element_layout_layout, 
            true, 
            false
        );
    }

    const var_element_layout_spacer_left = document.querySelector('.admin-layout.layout-style-grid-scalable > .layout-spacer-left');
    if (var_element_layout_spacer_left) {
        fn_resize_grid_lauout(
            var_element_layout_spacer_left, 
            var_element_layout_layout, 
            false,
            true 
        );
    }
}*/