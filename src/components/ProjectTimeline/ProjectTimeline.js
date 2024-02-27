import React from "react";
import classes from "./ProjectTimeline.module.css";

const Task = ({ task, phases, taskName }) => {
  const taskStyle = {
    width: `${task.timeLine.width * (100 / phases.length)}%`,
    marginLeft: `${task.timeLine.start * (100 / phases.length)}%`,
  };

  return (
    <div className={classes.task} style={taskStyle}>
      <p className={classes.name} style={{ "--color": task.timeLine.color }}>
        {" "}
        {task.taskName}
      </p>
      <div
        className={classes.taskBox}
        style={{ "--bg": task.timeLine.bg }}
      ></div>
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
  teams,
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
        {teams.map((el, index) => (
          <div className={classes.singleTask} key={index}>
            {el.tasks.map((task, i) => (
              <Task key={i} task={task} phases={phases} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
