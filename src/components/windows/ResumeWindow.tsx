import resumePages from "./resumePages.json";
import { RetroWindow, WindowMenu } from "./RetroWindow";
import documentIcon from "../../files/icons/Windows 2000 Text Document-2.png";

export default function ResumeWindow({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) {
  return (
    <RetroWindow
      visible={visible}
      close={close}
      title="Thomas Hanna Resume"
      icon={documentIcon}
      height={650}
      contentClassName="resume-document"
      toolbar={<WindowMenu items={["File", "Edit", "View", "Help"]} />}
      footer={
        <div className="paint-status">
          <span>Thomas_Hanna_Resume.pdf</span>
          <a href="/Thomas_Hanna_Resume.pdf" download>
            Save a copy
          </a>
        </div>
      }
    >
      <div className="resume-pages" tabIndex={0} aria-label="Résumé pages">
        {resumePages.map((text, index) => (
          <section key={index} aria-label={`Résumé page ${index + 1}`}>
            <img
              src={`/resume/page-${index + 1}.png`}
              alt={`Thomas Hanna résumé, page ${index + 1} of ${resumePages.length}`}
              width={1082}
              height={1400}
            />
            <p className="sr-only">{text}</p>
          </section>
        ))}
      </div>
    </RetroWindow>
  );
}
