
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DesktopRegister from "./components/DesktopRegister";
import ContactOverlay from "./components/ContactOverlay";
import AboutOverlay from "./components/AboutOverlay";
import DocsOverlay from "./components/DocsOverlay";
import DesktopLogIn from "./components/DesktopLogIn";
import LogInOverlayFirst from "./components/LogInOverlayFirst";
import RegisterOverlayFirst from "./components/RegisterOverlayFirst";
import HomeOverlay from "./components/HomeOverlay";
import PortalOverlay from "./components/PortalOverlay";
import ProcessingSubmission from "./components/ProcessingSubmission";
import DesignNewScaffold from "./components/DesignNewScaffold";
import Executing from "./components/Executing";
import Completed from "./components/Completed";
import ExecutionFailed from "./components/ExecutionFailed";
import LogInOverlaySecond from "./components/LogInOverlaySecond";
import RegisterOverlaySecond from "./components/RegisterOverlaySecond";
import DesktopContact from "./components/DesktopContact";
import DesktopDesignNewScaffoldPg2 from "./components/DesktopDesignNewScaffoldPg2";
import DesktopDesignNewScaffoldPg1 from "./components/DesktopDesignNewScaffoldPg1";
import DesktopDesignNewScaffoldPg4 from "./components/DesktopDesignNewScaffoldPg4";
import DesktopDesignNewScaffoldPg5 from "./components/DesktopDesignNewScaffoldPg5";
import DesktopDesignNewScaffoldPg3 from "./components/DesktopDesignNewScaffoldPg3";
import DesktopDesignNewScaffoldPg6 from "./components/DesktopDesignNewScaffoldPg6";
import DesktopDesignNewScaffoldPg7 from "./components/DesktopDesignNewScaffoldPg7";
import DesktopWebHome from "./components/DesktopWebHome";
import DesktopAbout from "./components/DesktopAbout";
import DesktopPortalHome from "./components/DesktopPortalHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/desktop-register">
          <DesktopRegister
            place="Register"
            selectInstitution="Select Institution"
            ssoSamlLoginForm="SSO/SAML Login Form"
            place2="Home"
          />
        </Route>
        <Route path="/contact-overlay">
          <ContactOverlay place="Contact" />
        </Route>
        <Route path="/about-overlay">
          <AboutOverlay about="About" />
        </Route>
        <Route path="/docs-overlay">
          <DocsOverlay documentation="Documentation" />
        </Route>
        <Route path="/desktop-log-in">
          <DesktopLogIn logIn="Log In" ssoSamlLoginForm="SSO/SAML Login Form" place="Home" />
        </Route>
        <Route path="/log-in-overlay-first">
          <LogInOverlayFirst>Log In</LogInOverlayFirst>
        </Route>
        <Route path="/register-overlay-first">
          <RegisterOverlayFirst>Register</RegisterOverlayFirst>
        </Route>
        <Route path="/home-overlay">
          <HomeOverlay place="Home" />
        </Route>
        <Route path="/portal-overlay">
          <PortalOverlay place="Portal" />
        </Route>
        <Route path="/processing-submission">
          <ProcessingSubmission>Processing Submission</ProcessingSubmission>
        </Route>
        <Route path="/design-new-scaffold">
          <DesignNewScaffold text2="Design New RNA Scaffold" />
        </Route>
        <Route path="/executing">
          <Executing>Executing</Executing>
        </Route>
        <Route path="/completed">
          <Completed>Completed</Completed>
        </Route>
        <Route path="/execution-failed">
          <ExecutionFailed>Execution Failed</ExecutionFailed>
        </Route>
        <Route path="/log-in-overlay-second">
          <LogInOverlaySecond>Log In</LogInOverlaySecond>
        </Route>
        <Route path="/register-overlay-second">
          <RegisterOverlaySecond>Register</RegisterOverlaySecond>
        </Route>
        <Route path="/desktop-contact">
          <DesktopContact {...desktopContactData} />
        </Route>
        <Route path="/desktop-design-new-scaffold-pg-2">
          <DesktopDesignNewScaffoldPg2 {...desktopDesignNewScaffoldPg2Data} />
        </Route>
        <Route path="/desktop-design-new-scaffold-pg-1">
          <DesktopDesignNewScaffoldPg1 {...desktopDesignNewScaffoldPg1Data} />
        </Route>
        <Route path="/desktop-design-new-scaffold-pg-4">
          <DesktopDesignNewScaffoldPg4 {...desktopDesignNewScaffoldPg4Data} />
        </Route>
        <Route path="/desktop-design-new-scaffold-pg-5">
          <DesktopDesignNewScaffoldPg5 {...desktopDesignNewScaffoldPg5Data} />
        </Route>
        <Route path="/desktop-design-new-scaffold-pg-3">
          <DesktopDesignNewScaffoldPg3 {...desktopDesignNewScaffoldPg3Data} />
        </Route>
        <Route path="/desktop-design-new-scaffold-pg-6">
          <DesktopDesignNewScaffoldPg6 {...desktopDesignNewScaffoldPg6Data} />
        </Route>
        <Route path="/desktop-design-new-scaffold-pg-7">
          <DesktopDesignNewScaffoldPg7 {...desktopDesignNewScaffoldPg7Data} />
        </Route>
        <Route path="/:path(|desktop-web-home)">
          <DesktopWebHome
            about="About"
            place="Contact"
            documentation="Documentation"
            title="RNAMake"
            x3DDesignToolkit="3D Design Toolkit"
            text20={
              <>
                RNAMake is a toolkit for designing and optimizing RNA 3D structure. It allows the alignment between RNA
                motifs. These motif are small modular peices of RNA that are believed to fold independently, thus
                attaching them together with helix flanking both sides allows users of RNAMake to build large segments
                of RNA with a high success rate of forming the predicted structure in vitro.
                <br />
                <br />
                Create an account or log in to access the application
              </>
            }
          />
        </Route>
        <Route path="/desktop-about">
          <DesktopAbout {...desktopAboutData} />
        </Route>
        <Route path="/desktop-portal-home">
          <DesktopPortalHome {...desktopPortalHomeData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const desktopContactData = {
    contacts: "Contacts",
    text3: "Eos aut doloremque fugit iste officia sed quisquam delectus. Voluptatem quaerat consequatur voluptatem corporis et aspernatur nam. Qui est corrupti quibusdam explicabo recusandae. Quo dolor ea quos doloribus corrupti vero. Dignissimos molestiae explicabo totam non neque. Eum velit amet perferendis sed ipsa doloremque.",
    image2: "/img/image-2@2x.png",
    image3: "/img/image-3@2x.png",
    name: "Derek Weitzel",
    text4: "Research Assistant Professor of Computer Science and Engineering",
    dweitzelUnlEdu: "dweitzel@unl.edu",
    hongfengYu: "Hongfeng Yu",
    text5: "Associate Professor of Computer Science and Engineering",
    hfyuUnlEdu: "hfyu@unl.edu",
    image1: "/img/image-1@2x.png",
    name2: "Joseph Yesselmen",
    text7: "Assistant Professor of Chemistry",
    spanText: <>jyesselm@unl.edu<br /></>,
    spanText2: "Yesselmen Lab Page",
};

const desktopDesignNewScaffoldPg2Data = {
    text9: "Design New RNA Scaffold",
    place: "Name",
    basePdb: "Base PDB",
    basePairs: "Base Pairs",
    designs: "Designs",
    computation: "Computation",
    review: "Review",
    submit: "Submit",
    spanText: <>Submission requires a PDB containing RNA that has at least 2 basepair ends. <br /><br />You can download an example </>,
    spanText2: "here",
    spanText3: ".",
};

const desktopDesignNewScaffoldPg1Data = {
    text13: "Design New RNA Scaffold",
    place: "Name",
    basePdb: "Base PDB",
    basePairs: "Base Pairs",
    designs: "Designs",
    computation: "Computation",
    review: "Review",
    submit: "Submit",
    rnaScaffoldName: "RNA Scaffold Name",
    enterScaffoldName: "Enter Scaffold Name",
    text10: "The name will be used to identify your scaffold design after submission",
    text12: "Description (optional)",
    enterDescription: "Enter Description",
    text11: "A description can help you distinguish scaffolds and can hold relevant information that is not otherwise included in the submission. Please do not add any confidential information.",
};

const desktopDesignNewScaffoldPg4Data = {
    text14: "Design New RNA Scaffold",
    place: "Name",
    basePdb: "Base PDB",
    basePairs: "Base Pairs",
    designs: "Designs",
    computation: "Computation",
    review: "Review",
    submit: "Submit",
    numberOfDesigns: "Number of Designs",
    number: "10",
    text15: "Number of Sequences per Design",
    number2: "4",
};

const desktopDesignNewScaffoldPg5Data = {
    text16: "Design New RNA Scaffold",
    place: "Name",
    basePdb: "Base PDB",
    basePairs: "Base Pairs",
    designs: "Designs",
    computation: "Computation",
    review: "Review",
    submit: "Submit",
    text17: "Change the options for computing your scaffolds here. Press the next button to leave the options as default",
    allocation: "Allocation",
    xdefault: "Default",
    computeResource: "Compute Resource",
    xdefault2: "Default",
    queue: "Queue",
    xdefault3: "Default",
    nodeCount: "Node Count",
    number: "1",
    surname: "Wall Time Limit (minutes) (default 60)",
    number2: "60",
    text18: "Total Physical Memory (MB)",
    number3: "70",
    coreCount: "Core Count",
    number4: "1",
};

const nav5Data = {
    className: "nav-2",
};

const desktopDesignNewScaffoldPg3Data = {
    text19: "Design New RNA Scaffold",
    place: "Name",
    basePdb: "Base PDB",
    basePairs: "Base Pairs",
    designs: "Designs",
    computation: "Computation",
    review: "Review",
    submit: "Submit",
    a145: "A145",
    a146: "A146",
    a147: "A147",
    a148: "A148",
    a149: "A149",
    a150: "A150",
    a151: "A151",
    a152: "A152",
    a153: "A153",
    a154: "A154",
    a155: "A155",
    startBasePair: "Start Base Pair",
    a141A162: "A141-A162",
    a221: "A221",
    a222: "A222",
    a223: "A223",
    a224: "A224",
    a225: "A225",
    a226: "A226",
    a227: "A227",
    a228: "A228",
    a246: "A246",
    a247: "A247",
    a248: "A248",
    endBasePair: "End Base Pair",
    a221A252: "A221-A252",
    text20: "Enter the range in the boxes below or select from the checklist. If you type A141-A162, for example, it denotes that the base pair resides between residue 141 on chain A and residue 162 on chain A.",
    navProps: nav5Data,
};

const desktopDesignNewScaffoldPg6Data = {
    text21: "Design New RNA Scaffold",
    place: "Name",
    basePdb: "Base PDB",
    basePairs: "Base Pairs",
    designs: "Designs",
    computation: "Computation",
    review: "Review",
    submit: "Submit",
    text22: "Review your submission before submitting",
    experimentName: "Experiment Name",
    exampleName: "Example Name",
    allocation: "Allocation",
    xdefault: "Default",
    description: "Description",
    text23: "Quidem eveniet ut dolore...",
    computeResource: "Compute Resource",
    xdefault2: "Default",
    pbdFile: "PBD File",
    text24: "example_pbd_file.pbd",
    queue: "Queue",
    xdefault3: "Default",
    startBasePair: "Start Base Pair",
    a141A162: "A141-A162",
    nodeCount: "Node Count",
    number: "1",
    endBasePair: "End Base Pair",
    a221A252: "A221-A252",
    coreCount: "Core Count",
    number2: "1",
    numberOfDesigns: "Number of Designs",
    number3: "10",
    surname: "Wall Time Limit",
    address: "60 minutes",
    numberOfSequences: "Number of Sequences",
    number4: "4",
    physicalMemory: "Physical Memory",
    x100Mb: "100MB",
    submit2: "Submit",
};

const desktopDesignNewScaffoldPg7Data = {
    text25: "Design New RNA Scaffold",
    place: "Name",
    basePdb: "Base PDB",
    basePairs: "Base Pairs",
    designs: "Designs",
    computation: "Computation",
    review: "Review",
    submit: "Submit",
    spanText: <>Thank you for your submission<br /><br /></>,
    spanText2: "Return to Portal",
};

const desktopAboutData = {
    aboutTheToolkit: "About the Toolkit",
    acknowledgements: "Acknowledgements",
    partnership_To_Advance_Throughput_C: "/img/partnership-to-advance-throughput-computing-1@2x.png",
    osg_OpaqueRemovebgPreview1: "/img/osg-opaque-removebg-preview-1@2x.png",
    nsf1: "/img/nsf-1@2x.png",
    xsedeFullColor1: "/img/xsede-full-color-1@2x.png",
    universityOfNebraskaLincolnUnl1: "/img/university-of-nebraska-lincoln-unl-1@2x.png",
    text29: "This work was completed utilizing the Holland Computing Center of the University of Nebraska, which receives support from the Nebraska Research Initiative.",
};

const experiment1Data = {
    text1: "RNA Scaffold a06ff20",
    address: "1 second ago",
};

const experiment12Data = {
    text1: "RNA Scaffold a06ff18",
    address: "14 minutes ago",
    className: "experiment-2",
};

const scaffold3Data = {
    className: "",
};

const experiment3Data = {
    text3: "RNA Scaffold a06ff15",
    address: "32 minutes ago",
    scaffoldProps: scaffold3Data,
};

const scaffold5Data = {
    className: "scaffold-2",
};

const experiment32Data = {
    text3: "RNA Scaffold a06fee4",
    address: "1 day ago",
    scaffoldProps: scaffold5Data,
};

const scaffold6Data = {
    className: "scaffold-3",
};

const experiment33Data = {
    text3: "RNA Scaffold a06fee3",
    address: "1 day ago",
    scaffoldProps: scaffold6Data,
};

const desktopPortalHomeData = {
    title: "RNAMake",
    x3DDesignToolkit: "3D Design Toolkit",
    place: "Home",
    place2: "Portal",
    recentExperiments: "Recent Experiments",
    text6: "RNA Scaffold a06ff02",
    address: "2 hours ago",
    experiment1Props: experiment1Data,
    experiment12Props: experiment12Data,
    experiment3Props: experiment3Data,
    experiment32Props: experiment32Data,
    experiment33Props: experiment33Data,
};

