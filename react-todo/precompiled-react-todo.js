"use strict";

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== "undefined" &&
      iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (
    n === "Arguments" ||
    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
  )
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (
      _i = _i.call(arr);
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var x = 0;
var y = 0;

var ToDoMain = function ToDoMain() {
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    taskLines = _React$useState2[0],
    setTaskLines = _React$useState2[1];

  var _React$useState3 = React.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    input = _React$useState4[0],
    setInput = _React$useState4[1];

  var _React$useState5 = React.useState(1),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    modeA = _React$useState6[0],
    setModeA = _React$useState6[1];

  var _React$useState7 = React.useState(1),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    modeC = _React$useState8[0],
    setModeC = _React$useState8[1]; //1 is on, 0 is off

  var activeButton = function activeButton(e) {
    var new_modeA = modeA;
    new_modeA++;
    setModeA(new_modeA);

    if (modeA % 2 === 0) {
      e.target.style.color = "rgb(58, 123, 253)";
    } else if (modeA % 2 !== 0) {
      e.target.style.color = "rgb(169, 169, 169)";
    }
  };

  var completedButton = function completedButton(e) {
    var new_modeC = modeC;
    new_modeC++;
    setModeC(new_modeC);

    if (modeC % 2 === 0) {
      e.target.style.color = "rgb(58, 123, 253)";
    } else if (modeC % 2 !== 0) {
      e.target.style.color = "rgb(169, 169, 169)";
    }
  };

  var sum = 0;
  taskLines.map(function (taskLine) {
    if (taskLine.mark === "fa-regular fa-circle") {
      sum++;
    }
  });

  var deleteTask = function deleteTask(e) {
    var identifier = parseInt(e.target.parentElement.id);
    setTaskLines(function (cur_array) {
      return cur_array.filter(function (task) {
        return task.sno !== identifier;
      });
    });
  };

  var taskChecker = function taskChecker(e) {
    var identifier = parseInt(
      e.target.parentElement.parentElement.id
    );
    var identifierIndex = taskLines
      .map(function (taskLine) {
        return taskLine.sno;
      })
      .indexOf(identifier);

    if (e.target.className == "fa-regular fa-circle") {
      setTaskLines(function (cur_array) {
        var new_array = JSON.parse(JSON.stringify(cur_array));
        new_array[identifierIndex].mark = "fa-solid fa-circle-check";
        new_array[identifierIndex].color = "darkgray";
        new_array[identifierIndex].text_decoration = "line-through";
        return new_array;
      });
    } else if (e.target.className == "fa-solid fa-circle-check") {
      setTaskLines(function (cur_array) {
        var new_array = JSON.parse(JSON.stringify(cur_array));
        new_array[identifierIndex].mark = "fa-regular fa-circle";
        new_array[identifierIndex].color = "";
        new_array[identifierIndex].text_decoration = "none";
        return new_array;
      });
    }
  };

  var clearCompleted = function clearCompleted() {
    setTaskLines(function (cur_array) {
      return cur_array.filter(function (task) {
        return task.mark !== "fa-solid fa-circle-check";
      });
    });
  };

  var css_file = document.getElementById("css_file");

  var _React$useState9 = React.useState(""),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    bgImg = _React$useState10[0],
    setBgImg = _React$useState10[1]; //useEffect

  React.useEffect(function () {
    var screen_width = window.matchMedia("(max-width: 480px)");

    if (screen_width.matches) {
      setBgImg("bg-mobile-light.jpg");
    } else {
      setBgImg("bg-desktop-light.jpg");
    }
  }, []);

  var mode_switcher = function mode_switcher(e) {
    if (y % 2 === 0) {
      e.target.setAttribute("class", "fa-solid fa-sun");
      css_file.setAttribute("href", "react-todo-dark.css");

      if (bgImg === "bg-mobile-light.jpg") {
        setBgImg("bg-mobile-dark.jpg");
      } else {
        setBgImg("bg-desktop-dark.jpg");
      }

      y++;
    } else if (y % 2 !== 0) {
      e.target.setAttribute("class", "fa-solid fa-moon");
      css_file.setAttribute("href", "react-todo-light.css");

      if (bgImg === "bg-mobile-dark.jpg") {
        setBgImg("bg-mobile-light.jpg");
      } else {
        setBgImg("bg-desktop-light.jpg");
      }

      y++;
    }
  };

  var hoverOn = function hoverOn(e) {
    e.currentTarget.lastChild.style.display = "block";
  };

  var hoverOff = function hoverOff(e) {
    e.currentTarget.lastChild.style.display = "none";
  };

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      id: "todo-main2",
    },
    /*#__PURE__*/ React.createElement("img", {
      id: "todo-bg-img",
      src: bgImg,
    }),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        id: "todo-title",
      },
      /*#__PURE__*/ React.createElement("h1", null, "T O D O"),
      /*#__PURE__*/ React.createElement("i", {
        className: "fa-solid fa-moon",
        id: "moon",
        onClick: function onClick(e) {
          return mode_switcher(e);
        },
      })
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        id: "todo-input",
      },
      /*#__PURE__*/ React.createElement("i", {
        className: "fa-regular fa-circle",
      }),
      /*#__PURE__*/ React.createElement(
        "form",
        {
          onSubmit: function onSubmit(e) {
            e.preventDefault();

            if (input !== "") {
              setTaskLines(function (curr) {
                return [
                  {
                    sno: x,
                    mark: "fa-regular fa-circle",
                    taskText: input,
                    color: "",
                    text_decoration: "none",
                  },
                ].concat(_toConsumableArray(curr));
              });
              x++;
              setInput("");
            }
          },
        },
        /*#__PURE__*/ React.createElement("input", {
          type: "text",
          id: "task-input",
          placeholder: "what's on your mind?",
          value: input,
          onChange: function onChange(e) {
            setInput(e.target.value);
          },
        })
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        id: "todo-card",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "tasks-div",
        },
        taskLines
          .filter(function (taskLine) {
            if (modeA % 2 !== 0 && modeC % 2 === 0) {
              return taskLine.mark === "fa-regular fa-circle";
            } else if (modeA % 2 === 0 && modeC % 2 !== 0) {
              return taskLine.mark === "fa-solid fa-circle-check";
            } else if (modeA % 2 !== 0 && modeC % 2 !== 0) {
              return taskLine;
            }
          })
          .map(function (taskLine) {
            return /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "task-line",
                key: taskLine.sno,
                id: taskLine.sno,
                onMouseEnter: function onMouseEnter(e) {
                  hoverOn(e);
                },
                onMouseLeave: function onMouseLeave(e) {
                  hoverOff(e);
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  className: "checkmark-i",
                },
                /*#__PURE__*/ React.createElement("i", {
                  className: taskLine.mark,
                  onClick: function onClick(e) {
                    taskChecker(e);
                  },
                  style: {
                    color: taskLine.color,
                  },
                })
              ),
              /*#__PURE__*/ React.createElement(
                "p",
                {
                  className: "task-text-name",
                  style: {
                    color: taskLine.color,
                    textDecoration: taskLine.text_decoration,
                  },
                },
                taskLine.taskText
              ),
              /*#__PURE__*/ React.createElement("i", {
                className: "fa-solid fa-xmark",
                onClick: function onClick(e) {
                  deleteTask(e);
                },
              })
            );
          })
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          id: "card-bottom",
        },
        /*#__PURE__*/ React.createElement(
          "p",
          {
            id: "total-tasks",
          },
          sum,
          " items left"
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            id: "card-bottom-mid",
          },
          /*#__PURE__*/ React.createElement("input", {
            type: "button",
            className: "all-active-completed",
            value: "Active",
            id: "active",
            onClick: function onClick(e) {
              activeButton(e);
            },
          }),
          /*#__PURE__*/ React.createElement("input", {
            type: "button",
            className: "all-active-completed",
            value: "Completed",
            id: "completed",
            onClick: function onClick(e) {
              completedButton(e);
            },
          })
        ),
        /*#__PURE__*/ React.createElement("input", {
          type: "button",
          className: "all-active-completed",
          value: "Clear Completed",
          id: "clearButton",
          onClick: clearCompleted,
        })
      )
    ),
    /*#__PURE__*/ React.createElement("p", null, "Stay focused")
  );
};

var root = ReactDOM.createRoot(document.getElementById("todo-main"));
root.render(/*#__PURE__*/ React.createElement(ToDoMain, null));
