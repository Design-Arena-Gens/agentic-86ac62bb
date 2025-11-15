import styles from "./page.module.css";

const timeline = [
  {
    stamp: "00:00 — 00:06",
    title: "Set the tone",
    body: "Launch with a cinematic title card that primes the team for a bold 2025 roadmap.",
  },
  {
    stamp: "00:06 — 00:12",
    title: "Automate weekly deployments",
    body: "Show the pipeline heartbeat and rally everyone around predictable Friday ship rituals.",
  },
  {
    stamp: "00:12 — 00:18",
    title: "Double down on observability",
    body: "Surface dashboards, SLOs, and alert hygiene to keep incidents invisible to users.",
  },
  {
    stamp: "00:18 — 00:24",
    title: "Mentor new engineers",
    body: "Highlight pairing sessions and playbooks that accelerate onboarding and confidence.",
  },
  {
    stamp: "00:24 — 00:30",
    title: "Protect maker time",
    body: "Celebrate deep work blocks and async updates that defend focus for the whole org.",
  },
  {
    stamp: "00:30 — 00:36",
    title: "Launch community demos",
    body: "End on a rally cry that invites feedback loops and monthly product showcases.",
  },
];

const takeaways = [
  "Schedule a Friday premiere so every squad member presses play together.",
  "Pair the video with a Notion doc listing owners, key dates, and OKRs.",
  "Embed the MP4 in kickoff decks and internal wikis to keep the narrative visible.",
  "Export clips for social to attract candidates who align with your engineering ethos.",
];

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.badge}>2025 Playbook</div>
        <h1 className={styles.title}>Tech Resolutions Video</h1>
        <p className={styles.subtitle}>
          A 36-second manifesto for engineering teams who want to automate more,
          ship faster, and make 2025 their most audacious year yet.
        </p>
        <div className={styles.heroMetrics}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Length</span>
            <span className={styles.metricValue}>00:36</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Format</span>
            <span className={styles.metricValue}>1080p · MP4</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Use cases</span>
            <span className={styles.metricValue}>Kickoff · All-hands · Social</span>
          </div>
        </div>
      </header>

      <section className={styles.videoSection}>
        <div className={styles.playerShell}>
          <video
            className={styles.video}
            controls
            preload="metadata"
            poster="/tech-resolutions-poster.jpg"
          >
            <source src="/tech-resolutions.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.caption}>
            Scenes pulse through your 2025 objectives—automation, observability,
            mentorship, focus, and community.
          </p>
        </div>
        <aside className={styles.videoMeta}>
          <div className={styles.metaCard}>
            <h2 className={styles.metaHeading}>Storyboard highlights</h2>
            <p className={styles.metaBody}>
              The video stitches together bold typography with rhythm-tight
              transitions. Each six-second beat reinforces a measurable habit so
              your strategy stays memorable beyond the kickoff.
            </p>
          </div>
          <div className={styles.metaCard}>
            <h2 className={styles.metaHeading}>How to use it</h2>
            <ul className={styles.metaList}>
              <li>Drop into your all-hands deck and autoplay on slide open.</li>
              <li>Loop it in the lobby before leadership Q&A sessions.</li>
              <li>Pair with Miro boards or Notion docs to connect vision to tasks.</li>
            </ul>
          </div>
          <a className={styles.downloadButton} href="/tech-resolutions.mp4" download>
            Download MP4
          </a>
        </aside>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.sectionHeading}>
          <h2>Scene by scene</h2>
          <p>
            Use the timestamps to anchor facilitation notes, sprinkled with
            prompts and OKR check-ins.
          </p>
        </div>
        <div className={styles.timelineGrid}>
          {timeline.map((item) => (
            <article key={item.title} className={styles.timelineCard}>
              <span className={styles.timelineStamp}>{item.stamp}</span>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <p className={styles.timelineBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.takeaways}>
        <div className={styles.sectionHeading}>
          <h2>Make it stick</h2>
          <p>Keep momentum high by pairing the video with tangible follow-ups.</p>
        </div>
        <ul className={styles.takeawayList}>
          {takeaways.map((tip) => (
            <li key={tip} className={styles.takeawayItem}>
              {tip}
            </li>
          ))}
        </ul>
        <p className={styles.footerNote}>
          Ready for the next chapter? Remix the script, swap the palette, and keep
          the cadence alive as your team evolves.
        </p>
      </section>
    </div>
  );
}
