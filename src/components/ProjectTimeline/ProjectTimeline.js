import React from "react";
import classes from "./ProjectTimeline.module.css";

const Task = ({ task, phases }) => {
  const taskStyle = {
    width: `${task.width * (100 / phases.length)}%`,
    marginLeft: `${task.start * (100 / phases.length)}%`,
  };

  return (
    <div className={classes.task} style={taskStyle}>
      <p className={classes.name} style={{ "--color": task.color }}>
        {" "}
        {task.name}
      </p>
      <div className={classes.taskBox} style={{ "--bg": task.bg }}></div>
    </div>
  );
};

const ProjectTimeline = ({
  title,
  day,
  titleColor,
  bg,
  border,
  phases,
  tasks,
}) => {
  return (
    <div className={classes.wrapper} style={{ "--bg": bg, "--border": border }}>
      <h2 className={classes.title} style={{ "--color": titleColor }}>
        {title}
      </h2>

      <div className={classes.phases}>
        <div className={classes.dayWrapper}>
          <div className={classes.dayContainer} style={{ "--bg": day.dayBg }}>
            <p className={classes.day} style={{ "--color": day.dayColor }}>
              {day.label}
            </p>{" "}
            <div className={classes.curve} style={{ "--bg": day.dayBg }}></div>
          </div>
        </div>

        {phases.map((phase, index) => (
          <div
            key={index}
            className={classes.phase}
            style={{ "--bg": phase.bg }}
          >
            <p
              className={classes.label}
              style={{ "--color": phase.labelColor }}
            >
              {phase.label}
            </p>
          </div>
        ))}
      </div>

      <div className={classes.allTask}>
        {tasks.map((el, index) => (
          <div className={classes.singleTask} key={index}>
            {el.map((task, i) => (
              <Task key={i} task={task} phases={phases} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
