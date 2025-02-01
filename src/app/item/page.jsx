'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faDownload} from '@fortawesome/free-solid-svg-icons'
import styles from"./seemore.module.css";

const Page = () => {
  const resources = [
    { id: 0, name: "Remarkable_Item_7" },
    { id: 1, name: "Tiny-Equivalent-" },
    { id: 2, name: "Smart-Resource_3" },
    { id: 3, name: "Advanced-Model_X" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const copyAllToClipboard = () => {
    const allText = resources.map((res) => res.name).join("\n");
    navigator.clipboard.writeText(allText);
    alert("All items copied!");
  };

  const downloadAll = () => {
    const text = resources.map((res) => res.name).join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "Order_Resources.txt";
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  return (
    <div className={styles.ordercontainer}>
      <h2>Order details</h2>
      <p className="order-id">#BISP1729452019</p>

      {/* Buttons */}
      <div className={styles.buttongroup}>
        <button className={styles.downloadbtn} onClick={downloadAll}>
          {/* <FaDownload className={styles.icon} /> Download */}
          <FontAwesomeIcon icon={faDownload} className={styles.icon}/> Download
        </button>
        <button className={styles.copyallbtn} onClick={copyAllToClipboard}>
          {/* <FaCopy className={styles.icon} /> Copy All */}
          <FontAwesomeIcon icon={faCopy} className={styles.icon}/> Copy All
        </button>
      </div>

      {/* Table */}
      <div className={styles.tablecomtainer}>
      <table className={styles.ordertable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Resource Information</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((res) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>
                <span className={styles.resourcebox}>{res.name}</span>
              </td>
              <td>
                <button className={styles.copybtn} onClick={() => copyToClipboard(res.name)}>
                  {/* <FaCopy className={styles.icon} /> Copy */}
                  <FontAwesomeIcon icon={faCopy} className={styles.icon}/> Copy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Page;
