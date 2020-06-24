var _containerHeight = 4000;
var _width, _height, _scrollHeight;
var _movingElements = [];
var _scrollPercent = 0;
var pre;
var _jsPrefix;
var _cssPrefix;



var transitions = [
    {
        selector: ".first-scroll-content,.first-scroll-specs",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.0
                }
            ]
        ],
        after: [
            ["opacity", 0.0]
        ],
        percentStart: 0.0,
        percentEnd: 0.015,
        percentBefore: -1,
        percentAfter: 1.1,
    },
    {
        selector: ".second-scroll",
        before: [
            ["opacity", 0.0]
        ],
        on: [
            ["opacity",
                {
                    start: 0.0,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.165,
        percentEnd: 0.18,
        percentBefore: -1,
        percentAfter: 0.195,
    },
    {
        selector: ".second-scroll",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.0
                }
            ]
        ],
        after: [
            ["opacity", 0.0]
        ],
        percentStart: 0.195,
        percentEnd: 0.21,
        percentBefore: 0.18,
        percentAfter: 1.1,
    },
    {
        selector: ".third-scroll",
        before: [
            ["opacity", 0.0]
        ],
        on: [
            ["opacity",
                {
                    start: 0.0,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.36,
        percentEnd: 0.375,
        percentBefore: -1,
        percentAfter: 0.39,
    },
    {
        selector: ".third-scroll",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.0
                }
            ]
        ],
        after: [
            ["opacity", 0.0]
        ],
        percentStart: 0.39,
        percentEnd: 0.405,
        percentBefore: 0.375,
        percentAfter: 1.1,
    },
    {
        selector: ".fourth-scroll",
        before: [
            ["opacity", 0.0]
        ],
        on: [
            ["opacity",
                {
                    start: 0.0,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.555,
        percentEnd: 0.56,
        percentBefore: -1,
        percentAfter: 0.575,
    },
    {
        selector: ".fourth-scroll",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.0
                }
            ]
        ],
        after: [
            ["opacity", 0.0]
        ],
        percentStart: 0.575,
        percentEnd: 0.59,
        percentBefore: 0.56,
        percentAfter: 1.1,
    },
    {
        selector: ".fifth-scroll",
        before: [
            ["opacity", 0.0]
        ],
        on: [
            ["opacity",
                {
                    start: 0.0,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.835,
        percentEnd: 0.985,
        percentBefore: -1,
        percentAfter: 1.1,
    },
    {
        selector: ".rocket-horizontal",
        before: [
            ["transform", [
                ["translate", -50,0],
            ]
            ]
        ],
        after: [
            ["transform", [
                ["translate", -50,0],
                ["scale", 1.9, 1.65]
            ]
            ]
        ],
        on: [
            ["transform", [
                ["translate", {
                    start: -50,
                    end: -50
                },
                    {
                        start: 0,
                        end: 0
                    }
                ],
                ["scale", {
                    start: 1,
                    end: 1.9
                },
                    {
                        start: 1,
                        end: 1.65
                    }]
            ]
            ]
        ],
        percentStart: 0.015,
        percentEnd: 0.165,
        percentBefore: -1,
        percentAfter:  0.59,
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.015,
        percentEnd: 0.165,
        percentBefore: -1,
        percentAfter:  0.21,

        before: [
            ["left",50],
            ["top",40]
        ],
        after: [
            ["left",135],
            ["top",40]
        ],
        on: [
            ["left",{start: 50, end: 135}],
            ["top",{start: 40, end: 40}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.21,
        percentEnd: 0.36,
        percentBefore: 0.165,
        percentAfter:  0.405,

        before: [
            ["left",135],
            ["top",40]
        ],
        after: [
            ["left",100],
            ["top",40]
        ],
        on: [
            ["left",{start: 135, end: 100}],
            ["top",{start: 40, end: 40}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.405,
        percentEnd: 0.555,
        percentBefore: 0.36,
        percentAfter:  0.59,

        before: [
            ["left",100],
            ["top",40]
        ],
        after: [
            ["left",52],
            ["top",40]
        ],
        on: [
            ["left",{start: 100, end: 52}],
            ["top",{start: 40, end: 40}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        before: [
            ["transform", [
                ["translate", -50,0],
                ["scale", 1.9, 1.65]
            ]
            ]
        ],
        on: [
            ["transform",[
                ["translate",{
                    start: -50,
                    end: -50
                },
                {
                    start: 0,
                    end: 0
                }
            ],
            ["scale",{
                start: 1.9,
                end: 0.45
            },
            {
                start: 1.65,
                end: 0.45
            }
        ]
            ]
        ]
        ],
        after: [
            ["transform",[
                ["translate",-50,0],
                ["scale",0.45,0.45]
            ]
        ]
        ],
        percentStart: 0.59,
        percentBefore: 0.555,
        percentAfter: 0.835,
        percentEnd: 0.74
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.59,
        percentBefore: 0.555,
        percentAfter: 0.74,
        percentEnd: 0.74,

        before: [
            ["left",52],
            ["top",40]
        ],
        after: [
            ["left",55],
            ["top",50]
        ],
        on: [
            ["left",{start: 52, end: 55}],
            ["top",{start: 40, end: 50}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        percentStart: 0.74,
        percentBefore: 0.74,
        percentAfter: 1.1,
        percentEnd: 0.79,

        before: [
            ["left",55],
            ["top",50]
        ],
        after: [
            ["left",55],
            ["top",65]
        ],
        on: [
            ["left",{start: 55, end: 55}],
            ["top",{start: 50, end: 65}]   
        ]
    },
    {
        selector: ".rocket-horizontal",
        before:  [
            ["transform",[
                ["translate",-50,0],
                ["scale",0.45,0.45]
            ],
        ]
        ],
        on: [
            ["transform",[
                ["translate",{
                    start: -50,
                    end: -50
                },
                {
                    start: 0,
                    end: 0
                }
            ],
            ["scale",{
                start: 0.45,
                end: 0.45
            },
            {
                start: 0.45,
                end: 0.45
            },
        ],
            ["rotate",{
                    start: 0,
                    end: 90
            }
        ]
            ]
        ]
        ],
        after: [
            ["transform",[
                ["translate",-50,0],
                ["scale",0.45,0.45],
                ["rotate",90]
            ]
        ]
        ],
        percentStart: 0.835,
        percentBefore: 0.79,
        percentAfter: 1.1,
        percentEnd: 0.985
    },
    {
        selector: ".rocket-3",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.5
                }
            ]
        ],
        after: [
            ["opacity", 0.5]
        ],
        percentStart: 0.015,
        percentEnd: 0.165,
        percentBefore: -1,
        percentAfter: 0.405,
    },
    {
        selector: ".rocket-3",
        before: [
            ["opacity", 0.5]
        ],
        on: [
            ["opacity",
                {
                    start: 0.5,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.405,
        percentEnd: 0.555,
        percentBefore: 0.165,
        percentAfter: 1.1,
    },
    {
        selector: ".rocket-2",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.5
                }
            ]
        ],
        after: [
            ["opacity", 0.5]
        ],
        percentStart: 0.015,
        percentEnd: 0.165,
        percentBefore: -1,
        percentAfter: 0.21,
    },
    {
        selector: ".rocket-2",
        before: [
            ["opacity", 0.5]
        ],
        on: [
            ["opacity",
                {
                    start: 0.5,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.21,
        percentEnd: 0.36,
        percentBefore: 0.165,
        percentAfter: 1.1,
    },
    {
        selector: ".rocket-1",
        before: [
            ["opacity", 1.0]
        ],
        on: [
            ["opacity",
                {
                    start: 1.0,
                    end: 0.5
                }
            ]
        ],
        after: [
            ["opacity", 0.5]
        ],
        percentStart: 0.21,
        percentEnd: 0.36,
        percentBefore: -1,
        percentAfter: 0.59
    },
    {
        selector: ".rocket-1",
        before: [
            ["opacity", 0.5]
        ],
        on: [
            ["opacity",
                {
                    start: 0.5,
                    end: 1.0
                }
            ]
        ],
        after: [
            ["opacity", 1.0]
        ],
        percentStart: 0.59,
        percentEnd: 0.61,
        percentBefore: 0.36,
        percentAfter: 1.1,
    },
    {
        selector: '.truck',
        before: [
            ["opacity",0],
        ],
        on: [
            ["opacity",{
                start: 0,
                end: 1
            }]
        ],
        after: [
            ["opacity",1]
        ],
        percentStart: 0.405,
        percentEnd: 0.555,
        percentBefore: -1,
        percentAfter: 1.1
    },
    {
        selector: ".truck",
        percentStart: 0.59,
        percentBefore: -1,
        percentAfter: 1.1,
        percentEnd: 0.77,

        before: [
            ["left",100],
            ["top",67]
        ],
        after: [
            ["left",52],
            ["top",67]
        ],
        on: [
            ["left",{start: 100, end: 52}],
            ["top",{start: 67, end: 67}]   
        ]
    }

]



function prefix() {
    var styles = window.getComputedStyle(document.documentElement, ''),
        pre = (Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
        )[1],
        dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
        dom: dom,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre[0].toUpperCase() + pre.substr(1)
    };
}

function resize() {
    _width = window.innerWidth;
    _height = window.innerHeight;
    _scrollHeight = _containerHeight - _height;
}

function constructTransform(transforms) {
    var result = "";
    for (var transform in transforms) {
        transform = transforms[transform];
        result += transform[0] + "(";
        if (transform[0] == "translate")
            result += transform[1] + "%," + transform[2] + "%";
        else if(transform[0] == "rotate")
            result += transform[1] + "deg";
        else
            result += transform[1] + "," + transform[2];
        result += ") ";
    }
    if (result == "")
        return "none";
    else
        return result;
}

function constructTransformInProgress(transforms, effectScrollPercent) {
    var result = "";
    for (var transform in transforms) {
        transform = transforms[transform];
        result += transform[0] + "(";
        var val1 = transform[1].start + (transform[1].end - transform[1].start) * effectScrollPercent;
        if(transform[0] != "rotate")
        var val2 = transform[2].start + (transform[2].end - transform[2].start) * effectScrollPercent;
        if (transform[0] == "translate")
            result += val1 + "%," + val2 + "%";
        else if(transform[0] == "rotate")
            result += val1 + "deg";
        else
            result += val1 + "," + val2;
        result += ") ";
    }
    if (result == "")
        return "none";
    else
        return result;
}

function loop() {

    _scrollOffset = window.pageYOffset || window.scrollTop;
    _scrollPercent = _scrollOffset / _scrollHeight || 0;

    for (var transition in transitions) {
        transition = transitions[transition];
        if (_scrollPercent < transition.percentStart && _scrollPercent > transition.percentBefore) {
            for (var effect in transition.before) {
                effect = transition.before[effect];
                if (effect[0] == "transform")
                    $(transition.selector).css(effect[0], constructTransform(effect[1]));
                else if(effect[0] == "left" || effect[0] == "top")
                $(transition.selector).css(effect[0], effect[1] + "%")
                else 
                    $(transition.selector).css(effect[0], effect[1])
            }
        }
        else if (_scrollPercent > transition.percentEnd && _scrollPercent < transition.percentAfter) {
            for (var effect in transition.after) {
                effect = transition.after[effect];
                if (effect[0] == "transform")
                    $(transition.selector).css(effect[0], constructTransform(effect[1]));
                else if(effect[0] == "left" || effect[0] == "top")
                    $(transition.selector).css(effect[0], effect[1] + "%")
                else
                    $(transition.selector).css(effect[0], effect[1])
            }
        }
        else if(_scrollPercent >= transition.percentStart && _scrollPercent <= transition.percentEnd){
            var effectScrollPercent = (_scrollPercent - transition.percentStart);
            effectScrollPercent /= (transition.percentEnd - transition.percentStart);
            for (var effect in transition.on) {
                effect = transition.on[effect];
                var value;
                if (effect[0] == "transform")
                    value = constructTransformInProgress(effect[1], effectScrollPercent);
                else
                    value = effect[1].start + (effect[1].end - effect[1].start) * effectScrollPercent;
                if(effect[0] == "left" || effect[0] == "top")
                    $(transition.selector).css(effect[0], value + "%")
                else
                    $(transition.selector).css(effect[0], value);
            }
        }

    }

    requestAnimationFrame(loop);
}

$(document).ready(function () {
    pre = prefix();
    _jsPrefix = pre.lowercase;
    if (_jsPrefix == 'moz')
        _jsPrefix = 'Moz';
    _cssPrefix = pre.css;
    resize();

    $(window).on('resize', resize());
    loop();

});

