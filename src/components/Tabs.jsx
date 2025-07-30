import { motion } from "framer-motion";

export default function Tabs({ categories, activeTab, setActiveTab, isAllTab = true }) {
  return (
    <>
      <div style={styles.navContainer} className="gap-[12px] md:gap-[24px] tabs-scroll w-full flex flex-row flex-wrap">
        {isAllTab && (
          <div
            onClick={() => setActiveTab("all")}
            style={{
              ...styles.tab,
              color: activeTab === "all" ? "white" : "#aaa",
          }}
        >
          {activeTab === "all" && (
            <motion.div
              layoutId="highlight"
              style={styles.highlight}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span style={{ position: "relative", zIndex: 1 }}>All</span>
        </div>
        )}

        {categories.map((tab) => (
          <div
            key={tab.slug}
            onClick={() => setActiveTab(tab.slug)}
            style={{
              ...styles.tab,
              color: activeTab === tab.slug ? "white" : "#aaa",
            }}
            className="md:w-auto w-[40%] text-center text-xs md:text-base mx-2"
          >
            {activeTab === tab.slug && (
              <motion.div
                layoutId="highlight"
                style={styles.highlight}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className="w-full"
              >
              </motion.div>
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{tab.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

const styles = {
  navContainer: {
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px",
    borderRadius: "50px",
    background: "#171921",
  },
  tab: {
    position: "relative",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "50px",
  },
  highlight: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "50px",
    background: "#000",
    border: "1px solid #49a8fc",
    zIndex: 0,
  },
};
