import { useState } from "react";
import MainComponent from "./components/MainComponent/MainComponent";
import Icon from "./images/Icon";
import Completed from "./images/Completed";
import CurrenTask from "./images/CurrenTask";
import Blocker from "./images/Blocker";

import ProjectTimeline from "./components/ProjectTimeline/ProjectTimeline";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "Thursday, 8. Feb 2024",
      subHeadingColor: "#155EEF",
      heading: "Cross-functional Team Updates",
      headingColor: "#000",
    },
    users: [
      {
        name: "CW",
        color: "#fff",
        fullName: "CHRISTOPHER WHITE",

        bg: "#FF692E",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "ZP",
        color: "#fff",
        fullName: "ZEYNEP PARTH",

        bg: "#F79009",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              text: "Random note Lorem ipsum",
              color: "#000",
            },
            {
              text: "Random Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "BZ",
        color: "#fff",
        fullName: "BARRY ZEIGER",

        bg: "#155EEF",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "RT",
        color: "#fff",
        fullName: "ROBERT TILL",

        bg: "#1570EF",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "BV",
        color: "#fff",
        fullName: "BRIGITTE VAKEY",
        bg: "#0086C9",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "BV",
        color: "#fff",
        fullName: "BRIGITTE VAKEY",
        bg: "#0086C9",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "MK",
        color: "#fff",
        fullName: "MICHAEL KEUGEL",

        bg: "#088AB2",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              text: "Random note Lorem ipsum",
              color: "#000",
            },
            {
              text: "Random Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "UV",
        color: "#fff",
        fullName: "UMA VAMAZ",

        bg: "#0E9384",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "UV",
        color: "#fff",
        fullName: "UMA VAMAZ",

        bg: "#0E9384",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "UV",
        color: "#fff",
        fullName: "UMA VAMAZ",

        bg: "#0E9384",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
      {
        name: "UV",
        color: "#fff",
        fullName: "UMA VAMAZ",

        bg: "#0E9384",
        listContainer: {
          bg: "#F2F4F7",
          lists: [
            {
              icon: <Completed color="#fff" bg="#32D583" />,
              text: "Completed Lorem ipsum",
              color: "#000",
            },
            {
              icon: <CurrenTask color="#fff" bg="#FEC84B" />,
              text: "Current task Lorem ipsum",
              color: "#000",
            },
            {
              icon: <Blocker color="#fff" bg="#FDA29B" />,
              text: "Blocker Lorem ipsum",
              color: "#000",
            },
          ],
        },
      },
    ],
    projectTimeline: {
      title: "Project Timeline",
      titleColor: "#000",
      bg: "#fff",
      border: "1px solid #D0D5DD",
      day: {
        label: "Today",
        dayBg: "#475467",
        dayColor: "#FFF",
      },

      phases: [
        { label: "Phase1", labelColor: "#000", bg: "#F2F4F7" },
        { label: "Phase2", labelColor: "#000", bg: "#F2F4F7" },
        { label: "Phase3", labelColor: "#000", bg: "#F2F4F7" },
        { label: "Phase4", labelColor: "#000", bg: "#F2F4F7" },
      ],
      tasks: [
        [
          {
            name: "Task 1",
            color: "#000",
            start: 0,
            width: 1,
            bg: "#2970FF",
          },
          {
            name: "Task 2",
            color: "#000",
            start: 1,
            width: 1,
            bg: "#2970FF",
          },
          {
            name: "Task 3",
            color: "#000",
            start: 1,
            width: 1,
            bg: "#2970FF",
          },
        ],
        [
          {
            name: "Task 1",
            color: "#000",
            start: 0,
            width: 1,
            bg: "#7F56D9",
          },
          {
            name: "Task 2",
            color: "#000",
            start: 0.7,
            width: 1.5,
            bg: "#7F56D9",
          },
          {
            name: "Task 3",
            color: "#000",
            start: 2,
            width: 1,
            bg: "#7F56D9",
          },
        ],
        [
          {
            name: "Task 1",
            color: "#000",
            start: 2,
            width: 1,
            bg: "#FF692E",
          },
          {
            name: "Task 2",
            color: "#000",
            start: 2.5,
            width: 1.5,
            bg: "#FF692E",
          },
        ],
      ],
    },
    responsibilities: {
      border: "1px solid #D0D5DD",
      bg: "#fff",

      header: {
        title: "Responsibilities",
        titleColor: "#000",
        bg: "#FFF",
        border: "1px solid #D0D5DD",
        steps: [
          {
            circles: [{ bg: "#32D583" }, { bg: "#32D583" }, { bg: "#32D583" }],
            circlesContainerBorder: "0.647px solid #D0D5DD",
            circlesContainerBg: "#fff",
            label: "Complete",
            labelColor: "#667085",
          },
          {
            circles: [
              { bg: "#32D583" },
              { bg: "#32D583" },
              { bg: "#32D583", opacity: ".3" },
            ],
            circlesContainerBorder: "0.647px solid #D0D5DD",
            circlesContainerBg: "#fff",
            label: "On track",
            labelColor: "#667085",
          },
          {
            circles: [
              { bg: "#FEC84B" },
              { bg: "#FEC84B", opacity: ".3" },
              { bg: "#FEC84B", opacity: ".3" },
            ],
            circlesContainerBorder: "0.647px solid #D0D5DD",
            circlesContainerBg: "#fff",
            label: "Minor issues",
            labelColor: "#667085",
          },
          {
            circles: [
              { bg: "#F97066", opacity: ".3" },
              { bg: "#F97066", opacity: ".3" },
              { bg: "#F97066", opacity: ".3" },
            ],
            circlesContainerBorder: "0.647px solid #D0D5DD",
            circlesContainerBg: "#fff",
            label: "Major blockers",
            labelColor: "#667085",
          },
          {
            circles: [
              { bg: "#EAECF0", opacity: ".3" },
              { bg: "#EAECF0", opacity: ".3" },
              { bg: "#EAECF0", opacity: ".3" },
            ],
            circlesContainerBorder: "0.647px solid #D0D5DD",
            circlesContainerBg: "#fff",
            label: "Not started",
            labelColor: "#667085",
          },
        ],
      },
      teams: [
        {
          bg: "#E5F2FF",
          teamHeader: {
            icon: <Icon color="#2970FF" />,
            teamName: "Team A",
            teamNameColor: "#000",
            border: "1px solid #D0D5DD",
            users: [
              { name: "BZ", color: "#fff", bg: "#155EEF" },
              { name: "RT", color: "#fff", bg: "#1570EF" },
              { name: "MK", color: "#fff", bg: "#088AB2" },
            ],
          },
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam",
          infoColor: "#000",
          tasks: [
            {
              bg: "#fff",
              taskName: "TASK 1",
              taskNameColor: "#000",
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],
            },
            {
              bg: "#fff",
              taskName: "TASK 2",
              taskNameColor: "#000",
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],
            },
            {
              bg: "#fff",
              taskName: "TASK 3",
              taskNameColor: "#000",
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],
            },
            {
              bg: "#fff",
              taskName: "TASK 4",
              taskNameColor: "#000",
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],
            },
          ],
        },
        {
          bg: "#F2EEFB",
          teamHeader: {
            icon: <Icon color="#7F56D9" />,
            teamName: "Team B",
            teamNameColor: "#000",
            border: "1px solid #D0D5DD",
            users: [
              { name: "ZP", color: "#fff", bg: "#444CE7" },
              { name: "CW", color: "#fff", bg: "#7F56D9" },
              { name: "AB", color: "#fff", bg: "#BA24D5" },
            ],
          },
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam",
          infoColor: "#000",
          tasks: [
            {
              bg: "#fff",
              taskName: "TASK 1",
              taskNameColor: "#000",
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],
            },
            {
              bg: "#fff",
              taskName: "TASK 2",
              taskNameColor: "#000",
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],
            },
            {
              bg: "#fff",
              taskName: "TASK 3",
              taskNameColor: "#000",
              circles: [
                { bg: "#32D583" },
                { bg: "#32D583" },
                { bg: "#32D583", opacity: "0.3" },
              ],
            },
          ],
        },
        {
          bg: "#FFEEE5",
          teamHeader: {
            icon: <Icon color="#FF692E " />,
            teamName: "Team B",
            teamNameColor: "#000",
            border: "1px solid #D0D5DD",
            users: [
              { name: "BZ", color: "#fff", bg: "#FF692E" },
              { name: "RT", color: "#fff", bg: "#F79009" },
              { name: "MK", color: "#fff", bg: "#FEC84B" },
            ],
          },
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam",
          infoColor: "#000",
          tasks: [
            {
              bg: "#fff",
              taskName: "TASK 1",
              taskNameColor: "#000",
              circles: [
                { bg: "#EAECF0" },
                { bg: "#EAECF0" },
                { bg: "#EAECF0" },
              ],
            },
            {
              bg: "#fff",
              taskName: "TASK 2",
              taskNameColor: "#000",
              circles: [
                { bg: "#EAECF0" },
                { bg: "#EAECF0" },
                { bg: "#EAECF0" },
              ],
            },
          ],
        },
      ],
    },
    marketedNotes: {
      bg: "#fff",
      borderWidth: "1px",
      borderColor: "#D0D5DD",
      header: {
        title: "Marked Notes",
        titleColor: "#000",
        bg: "#FFF",
        border: "1px solid #D0D5DD",
        status: [
          {
            icon: <Completed color="#fff" bg="#32D583" />,
            label: "Completed",
            labelColor: "#000",
          },
          {
            icon: <CurrenTask color="#fff" bg="#FEC84B" />,
            label: "Current task",
            labelColor: "#000",
          },
          {
            icon: <Blocker color="#fff" bg="#FDA29B" />,
            label: "Blocker",
            labelColor: "#000",
          },
        ],
      },
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
