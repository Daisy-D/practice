class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;
    }
    clickAction() {
        this.element.click(() => {
            if (this.num % 2 == 0) {
                this.element.css('font-size', '80px');
                $('#animation').addClass('num');
                // this.num = addnum(this.num);
                this.num++;
                setTimeout(() => {
                    $('#animation').removeClass('num');
                }, 100)
            } else {
                this.element.css('font-size', '100px');
                this.num = 0;
            }
            console.log(this.num);
        })
    }
}
class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export default Thumb