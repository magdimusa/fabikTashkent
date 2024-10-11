import React, { useState } from "react";
import "../styles/collection.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Pagination,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../assets/data";
import { NavLink } from "react-router-dom";
const Collection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const handleCategory = (category) => {
    setCategory(category.toLowerCase());
    setPage(1);
  };
  const filteredData = data
    .filter((item) =>
      category ? item.category.toLowerCase() === category : true
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
  const itemsPerPage = 8;
  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return (
    <div className="collection">
      <div className="collection__wrapper">
        <div className="collection__left">
          <form
            className="collection__form"
            data-aos="fade-right"
            data-aos-easing="linear"
          >
            <input
              type="search"
              className="collection__input"
              placeholder="search"
              onChange={handleSearch}
            />
            <div className="collection__icon">
              <SearchOutlinedIcon fontSize="medium" />
            </div>
          </form>
          <Accordion className="collection__accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h4>collection</h4>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="collection__category-list">
                <li
                  className="collection__category"
                  onClick={() => handleCategory("")}
                >
                 all
                </li>
                <li
                  className="collection__category"
                  onClick={() => handleCategory("spring collection")}
                >
                  spring_collection
                </li>
                <li
                  className="collection__category"
                  onClick={() => handleCategory("summer collection")}
                >
                  summer_collection
                </li>
                <li
                  className="collection__category"
                  onClick={() => handleCategory("autumn collection")}
                >
                  fall_collection
                </li>
                <li
                  className="collection__category"
                  onClick={() => handleCategory("winter collection")}
                >
                  winter_collection
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="collection__right">
          <div className="collection__navbar">
            <div className="collection__box">
              <h3 className="collection__title">collection</h3>
              <p className="collection__showing">
                showing {paginatedData.length} of{" "}
                {filteredData.length}
              </p>
            </div>
            <select name="" id="" className="collection__select">
              <option value="initial sort" className="collection__option">
                default_order
              </option>
              <option value="populary" className="collection__option">
                popularity
              </option>
              <option value="rating" className="collection__option">
                rating
              </option>
              <option value="novelity" className="collection__option">
                newest
              </option>
            </select>
          </div>

          <div className="collection__items">
            {paginatedData.length > 0 ? (
              <div className="collection__grid">
                {paginatedData.map((item) => (
                  <div
                    data-aos="zoom-in-right"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                  >
                    <NavLink to={`/product/${item.id}`} key={item.id}>
                      <div className="collection__item">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="collection__image"
                        />
                        <p className="collection__item-name">{item.name}</p>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            ) : (
              <h3 className="collection__not-found">{t("not_found")}</h3>
            )}
          </div>
          <Stack spacing={2} className="collection__pagination">
            <Pagination
              count={Math.ceil(filteredData.length / itemsPerPage)}
              page={page}
              onChange={handleChangePage}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Collection;
