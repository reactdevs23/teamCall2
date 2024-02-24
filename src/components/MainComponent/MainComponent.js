import React from "react";
import classes from "./MainComponent.module.css";
import Curve from "../../images/Curve";
import ProjectTimeline from "../ProjectTimeline/ProjectTimeline";

const MainComponent = ({
  header: mainHeader,
  projectTimeline,
  users,
  headingFontFamily,
  responsibilities,
  marketedNotes,
}) => {
  const { header, teams, bg, border } = responsibilities;

  return (
    <div
      className="min-h-screen py-5 flex flex-col items-center justify-center gap-12 w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        {" "}
        <div className={classes.header}>
          <div className={classes.headingContainer}>
            <h5
              className={classes.subHeading}
              style={{ "--color": mainHeader.subHeadingColor }}
            >
              {mainHeader.subHeading}
            </h5>
            <h2
              className={classes.heading}
              style={{
                "--color": mainHeader.headingColor,
                "--fontFamily": headingFontFamily,
              }}
            >
              {mainHeader.heading}
            </h2>
          </div>
          <div className={classes.usersContainer}>
            {users?.map((user, i) => (
              <p
                className={classes.user}
                key={i}
                style={{
                  "--color": user.color,
                  "--bg": user.bg,
                  zIndex: i !== users.length ? users.length - i : 0,
                }}
              >
                {user.name}
              </p>
            ))}
          </div>
        </div>
        <div className={[classes.wrapper].join(" ")}>
          <ProjectTimeline {...projectTimeline} />
          <div
            className={classes.teamsContainer}
            style={{ "--bg": bg, "--border": border }}
          >
            <div
              className={classes.teamsContainerHeader}
              style={{ "--border": header.border }}
            >
              <h3
                className={classes.title}
                style={{
                  "--bg": header.bg,
                  "--color": header.titleColor,
                }}
              >
                {header.title}
              </h3>
              <div className={classes.steps}>
                {header?.steps?.map((step, stepId) => (
                  <div key={stepId} className={classes.step}>
                    <div
                      className={classes.circles}
                      style={{
                        "--border": step.circlesContainerBorder,
                        "--bg": step.circlesContainerBg,
                      }}
                    >
                      {step?.circles?.map((el, i) => (
                        <div
                          className={classes.circle}
                          key={i}
                          style={{ "--bg": el.bg, "--opacity": el.opacity }}
                        ></div>
                      ))}
                    </div>
                    <p
                      className={classes.label}
                      style={{ "--color": step.labelColor }}
                    >
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={[classes.teams].join(" ")}>
              {teams?.map(
                (
                  {
                    bg,
                    teamHeader,
                    info,
                    infoColor,

                    tasks,
                  },
                  i
                ) => (
                  <div
                    className={[classes.team, "break-inside-avoid"].join(" ")}
                    style={{ "--bg": bg }}
                    key={i}
                  >
                    <div
                      className={classes.teamHeader}
                      style={{ "--border": teamHeader.border }}
                    >
                      <div className={classes.titleAndIcon}>
                        <div className={classes.icon}>{teamHeader.icon}</div>{" "}
                        <h5
                          className={classes.name}
                          style={{ "--color": teamHeader.teamNameColor }}
                        >
                          {teamHeader.teamName}
                        </h5>
                      </div>
                      <div className={classes.users}>
                        {teamHeader?.users?.map((user, i) => (
                          <p
                            className={classes.user}
                            key={i}
                            style={{ "--bg": user.bg, "--color": user.color }}
                          >
                            {user.name}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className={classes.projectContent}>
                      {" "}
                      <p
                        className={classes.info}
                        style={{ "--color": infoColor }}
                      >
                        {info}
                      </p>
                      <div className={classes.tasks}>
                        {tasks.map((task, i) => (
                          <div
                            className={classes.task}
                            key={i}
                            style={{ "--bg": task.bg }}
                          >
                            <p
                              className={classes.taskName}
                              style={{ "--color": task.taskNameColor }}
                            >
                              {task.taskName}
                            </p>
                            <div className={classes.step}>
                              {task?.circles?.map((el, i) => (
                                <div
                                  className={classes.circle}
                                  key={i}
                                  style={{
                                    "--bg": el.bg,
                                    "--opacity": el.opacity,
                                  }}
                                ></div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div
            className={classes.marketedNotes}
            style={{
              "--bg": marketedNotes.bg,
              "--borderColor": marketedNotes.borderColor,
              "--borderWidth": marketedNotes.borderWidth,
            }}
          >
            <div
              className={classes.marketedNotesHeader}
              style={{ "--border": marketedNotes.header.border }}
            >
              <h3
                className={classes.title}
                style={{
                  "--bg": marketedNotes.header.bg,
                  "--color": marketedNotes.header.titleColor,
                }}
              >
                {marketedNotes.header.title}
              </h3>
              <div className={classes.statusContainer}>
                {marketedNotes?.header?.status?.map((status, i) => (
                  <div className={classes.status} key={i}>
                    <div className={classes.icon}>{status.icon}</div>
                    <p
                      className={classes.label}
                      style={{ "--color": status.labelColor }}
                    >
                      {status.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={[classes.allMarketNotes, "columns-3"].join(" ")}>
              <div
                className={classes.lineContianer}
                style={{
                  "--borderColor": marketedNotes.borderColor,
                  "--borderWidth": marketedNotes.borderWidth,
                }}
              >
                <div className={classes.line}></div>{" "}
                <div className={classes.line}></div>
              </div>
              {users?.map((user, userId) => (
                <div key={userId} className={classes.marketNote}>
                  <p
                    className={classes.user}
                    style={{
                      "--color": user.color,
                      "--bg": user.bg,
                    }}
                  >
                    {user.name}
                  </p>
                  <div className={classes.infoContainer}>
                    <p
                      className={classes.name}
                      style={{
                        "--color": user.bg,
                        "--bg": user.bg,
                      }}
                    >
                      {user.fullName}
                    </p>
                    <div
                      className={classes.listContainer}
                      style={{ "--bg": user.listContainer.bg }}
                    >
                      <div className={classes.curve}>
                        <Curve bg={user.listContainer.bg} />
                      </div>
                      {user?.listContainer?.lists?.map((list, i) =>
                        list.icon ? (
                          <div className={classes.singleList} key={i}>
                            <div className={classes.icon}>{list.icon}</div>
                            <p
                              style={{ "--color": list.color }}
                              className={classes.text}
                              key={i}
                            >
                              {list.text}
                            </p>
                          </div>
                        ) : (
                          <li
                            style={{ "--color": list.color }}
                            className={classes.list}
                            key={i}
                          >
                            {list.text}
                          </li>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
