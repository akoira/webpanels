function Toggle3() {
    this.sprite = PIXI.Sprite.fromImage('/img/round-up.png');
    this.current = 0;
    this.active = false;
    this.init();
}

Toggle3.prototype.toggle = function () {
    switch (this.current) {
        case 0:
            this.sprite.texture = PIXI.Texture.fromImage("/img/round-up.png");
            break;
        case 1:
            this.sprite.texture = PIXI.Texture.fromImage("/img/round-norm.png");
            break;
        case 2:
            this.sprite.texture = PIXI.Texture.fromImage("/img/round-down.png");
            break;
    }
};

Toggle3.prototype.init = function () {
    var self = this;
    this.sprite.interactive = true;

    this.sprite.on('touchstart', function (eventData) {
        self.active = true;
    }, null);
    this.sprite.on('touchend', function (eventData) {
        self.active = false;
    }, null);
    this.sprite.on('touchmove', function (eventData) {
        if (self.active) {
            if (eventData.data.originalEvent.movementY > 5 && self.current < 2) {
                self.current += 1
                self.active = false;
                self.toggle();
            }
            if (eventData.data.originalEvent.movementY < -5 && self.current > 0) {
                self.current -= 1
                self.active = false;
                self.toggle();
            }
        }
    }, null);

    this.sprite.on('mousedown', function (eventData) {
        self.active = true;
    }, null);
    this.sprite.on('mouseout', function (eventData) {
        self.active = false;
    }, null);
    this.sprite.on('mouseup', function (eventData) {
        self.active = false;
    }, null);
    this.sprite.on('mousemove', function (eventData) {
        if (self.active) {
            if (eventData.data.originalEvent.movementY > 5 && self.current < 2) {
                self.current += 1
                self.active = false;
                self.toggle();
            }
            if (eventData.data.originalEvent.movementY < -5 && self.current > 0) {
                self.current -= 1
                self.active = false;
                self.toggle();
            }
        }
    }, null);
};
