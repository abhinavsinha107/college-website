/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./AddNews.module.css";
import Card from "../../card/Card";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../firebase/config";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";

const categories = [
  { id: 1, name: "Computer Science and Engineering" },
  { id: 2, name: "Information Technology" },
  { id: 3, name: "Electronics and Telecommunication" },
  { id: 4, name: "Civil Engineering" },
  { id: 5, name: "Mechanical Engineering" },
];

const initialState = {
  title: "",
  imageURL: "",
  branch: "",
  desc: "",
};

const AddNews = () => {
  const [news, setNews] = useState({
    ...initialState
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    const storageRef = ref(storage, `collegeWebsite/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setNews({ ...news, imageURL: downloadURL });
          toast.success("Image uploaded successfully");
        });
      }
    );
  };

  const addNews = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const docRef = addDoc(collection(db, "news"), {
        title: news.title,
        imageURL: news.imageURL,
        branch: news.branch,
        desc: news.desc,
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setUploadProgress(0);
      setNews({...initialState});
      toast.success("Product uploaded successfully.")
      navigate("/admin/all-news");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
    {isLoading && <Loader />}
      <div className={styles.news}>
        <h1>Add New News</h1>
        <Card cardClass={styles.card}>
          <form onSubmit={addNews}>
            <label>News Title:</label>
            <input
              type="text"
              placeholder="News Title"
              required
              name="title"
              value={news.title}
              onChange={(e) => handleInputChange(e)}
            />

            <label>Notice Image:</label>
            <Card cardClass={styles.group}>
              {uploadProgress === 0 ? null : (
                <div className={styles.progress}>
                  <div
                    className={styles["progress-bar"]}
                    style={{ width: `${uploadProgress}%` }}
                  >
                    {uploadProgress < 100
                      ? `Uploading ${uploadProgress}%`
                      : `Upload Complete ${uploadProgress}%`}
                  </div>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                placeholder="News Image"
                name="image"
                onChange={(e) => handleImageChange(e)}
              />

              {news.imageURL === "" ? null : (
                <input
                  type="text"
                  // required
                  placeholder="Image URL"
                  name="imageURL"
                  disabled
                  value={news.imageURL}
                />
              )}
            </Card>

            <label>Branch:</label>
            <select
              required
              name="branch"
              value={news.branch}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="" disabled>
                -- Choose Branch --
              </option>
              {categories.map((cat) => {
                return (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                );
              })}
            </select>

            <label>Description</label>
            <textarea
              name="desc"
              required
              value={news.desc}
              onChange={(e) => handleInputChange(e)}
              cols="30"
              rows="10"
            ></textarea>
            <button className="--btn --btn-primary">Upload News</button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default AddNews;
