let x = 0;
var y = 0;

const ToDoMain = () => {
  const [taskLines, setTaskLines] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [modeA, setModeA] = React.useState(1);
  const [modeC, setModeC] = React.useState(1);
  //1 is on, 0 is off

  const activeButton = (e) => {
    let new_modeA = modeA;
    new_modeA++;
    setModeA(new_modeA);

    if (modeA % 2 === 0) {
      e.target.style.color = "rgb(58, 123, 253)";
    } else if (modeA % 2 !== 0) {
      e.target.style.color = "rgb(169, 169, 169)";
    }
  };

  const completedButton = (e) => {
    let new_modeC = modeC;
    new_modeC++;
    setModeC(new_modeC);

    if (modeC % 2 === 0) {
      e.target.style.color = "rgb(58, 123, 253)";
    } else if (modeC % 2 !== 0) {
      e.target.style.color = "rgb(169, 169, 169)";
    }
  };

  let sum = 0;
  taskLines.map((taskLine) => {
    if (taskLine.mark === "fa-regular fa-circle") {
      sum++;
    }
  });

  const deleteTask = (e) => {
    var identifier = parseInt(e.target.parentElement.id);
    setTaskLines((cur_array) =>
      cur_array.filter((task) => task.sno !== identifier)
    );
  };

  const taskChecker = (e) => {
    var identifier = parseInt(
      e.target.parentElement.parentElement.id
    );
    var identifierIndex = taskLines
      .map((taskLine) => taskLine.sno)
      .indexOf(identifier);

    if (e.target.className == "fa-regular fa-circle") {
      setTaskLines((cur_array) => {
        let new_array = JSON.parse(JSON.stringify(cur_array));
        new_array[identifierIndex].mark = "fa-solid fa-circle-check";
        new_array[identifierIndex].color = "darkgray";
        new_array[identifierIndex].text_decoration = "line-through";
        return new_array;
      });
    } else if (e.target.className == "fa-solid fa-circle-check") {
      setTaskLines((cur_array) => {
        let new_array = JSON.parse(JSON.stringify(cur_array));
        new_array[identifierIndex].mark = "fa-regular fa-circle";
        new_array[identifierIndex].color = "";
        new_array[identifierIndex].text_decoration = "none";
        return new_array;
      });
    }
  };

  const clearCompleted = () => {
    setTaskLines((cur_array) =>
      cur_array.filter(
        (task) => task.mark !== "fa-solid fa-circle-check"
      )
    );
  };

  const css_file = document.getElementById("css_file");
  const [bgImg, setBgImg] = React.useState("");

  //useEffect
  React.useEffect(() => {
    const screen_width = window.matchMedia("(max-width: 480px)");

    if (screen_width.matches) {
      setBgImg("bg-mobile-light.jpg");
    } else {
      setBgImg("bg-desktop-light.jpg");
    }
  }, []);

  const mode_switcher = (e) => {
    if (y % 2 === 0) {
      e.target.setAttribute("class", `fa-solid fa-sun`);
      css_file.setAttribute("href", `react-todo-dark.css`);
      if (bgImg === "bg-mobile-light.jpg") {
        setBgImg("bg-mobile-dark.jpg");
      } else {
        setBgImg("bg-desktop-dark.jpg");
      }
      y++;
    } else if (y % 2 !== 0) {
      e.target.setAttribute("class", `fa-solid fa-moon`);
      css_file.setAttribute("href", `react-todo-light.css`);
      if (bgImg === "bg-mobile-dark.jpg") {
        setBgImg("bg-mobile-light.jpg");
      } else {
        setBgImg("bg-desktop-light.jpg");
      }
      y++;
    }
  };

  const hoverOn = (e) => {
    e.currentTarget.lastChild.style.display = "block";
  };

  const hoverOff = (e) => {
    e.currentTarget.lastChild.style.display = "none";
  };

  return (
    <div id="todo-main2">
      <img id="todo-bg-img" src={bgImg} />

      <div id="todo-title">
        <h1>T O D O</h1>
        <i
          className="fa-solid fa-moon"
          id="moon"
          onClick={(e) => mode_switcher(e)}
        ></i>
      </div>

      <div id="todo-input">
        <i className="fa-regular fa-circle"></i>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input !== "") {
              setTaskLines((curr) => [
                {
                  sno: x,
                  mark: "fa-regular fa-circle",
                  taskText: input,
                  color: "",
                  text_decoration: "none",
                },
                ...curr,
              ]);
              x++;
              setInput("");
            }
          }}
        >
          <input
            type="text"
            id="task-input"
            placeholder="what's on your mind?"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </form>
      </div>

      <div id="todo-card">
        <div id="tasks-div">
          {taskLines
            .filter((taskLine) => {
              if (modeA % 2 !== 0 && modeC % 2 === 0) {
                return taskLine.mark === "fa-regular fa-circle";
              } else if (modeA % 2 === 0 && modeC % 2 !== 0) {
                return taskLine.mark === "fa-solid fa-circle-check";
              } else if (modeA % 2 !== 0 && modeC % 2 !== 0) {
                return taskLine;
              }
            })
            .map((taskLine) => (
              <div
                className="task-line"
                key={taskLine.sno}
                id={taskLine.sno}
                onMouseEnter={(e) => {
                  hoverOn(e);
                }}
                onMouseLeave={(e) => {
                  hoverOff(e);
                }}
              >
                <div className="checkmark-i">
                  <i
                    className={taskLine.mark}
                    onClick={(e) => {
                      taskChecker(e);
                    }}
                    style={{
                      color: taskLine.color,
                    }}
                  ></i>
                </div>
                <p
                  className="task-text-name"
                  style={{
                    color: taskLine.color,
                    textDecoration: taskLine.text_decoration,
                  }}
                >
                  {taskLine.taskText}
                </p>
                <i
                  className="fa-solid fa-xmark"
                  onClick={(e) => {
                    deleteTask(e);
                  }}
                ></i>
              </div>
            ))}
        </div>
        <div id="card-bottom">
          <p id="total-tasks">{sum} items left</p>
          <div id="card-bottom-mid">
            <input
              type="button"
              className="all-active-completed"
              value="Active"
              id="active"
              onClick={(e) => {
                activeButton(e);
              }}
            />
            <input
              type="button"
              className="all-active-completed"
              value="Completed"
              id="completed"
              onClick={(e) => {
                completedButton(e);
              }}
            />
          </div>
          <input
            type="button"
            className="all-active-completed"
            value="Clear Completed"
            id="clearButton"
            onClick={clearCompleted}
          />
        </div>
      </div>

      <p>Stay focused</p>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("todo-main")
);
root.render(<ToDoMain />);
