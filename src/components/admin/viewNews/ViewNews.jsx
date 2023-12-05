import { useEffect, useState } from "react";
import styles from "./ViewNews.module.css";
import { toast } from "react-toastify";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ViewNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    setIsLoading(true);
    try {
      const newsRef = collection(db, "news");
      const q = query(newsRef, orderBy("createdAt", "desc"));
      onSnapshot(q, (snapshot) => {
        // console.log(snapshot.docs);
        const allNews = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log(allNews);
        setNews(allNews);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className={styles.table}>
        <h2>View News</h2>
        {news.length === 0 ? (
          <p>No news found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Branch</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((news1, index) => {
                const { id, title, branch } = news1;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td>{branch}</td>
                    <td className={styles.icons}>
                      <Link to={`/admin/add-news/${id}`}>
                        <FaEdit size={20} color="green" />
                      </Link>
                      &nbsp;
                      <FaTrashAlt
                        size={18}
                        color="red"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
export default ViewNews;
