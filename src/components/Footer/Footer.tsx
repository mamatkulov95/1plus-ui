import twitterIcon from "/src/assets/twitter.svg";
import vkontaktIcon from "/src/assets/vkontakt.svg";
import lineIcon from "/src/assets/line.svg";
import starFooterIcon from "/src/assets/star-footer.svg";
import copyrightIcon from "/src/assets/copyright.svg";

export default function Footer() {
  const footerData = [
    {
      title: "NFT",
      subMenu1: "Что такое NFT",
      subMenu2: "Создайте NFT с нами"
    },
    { title: "Компания", subMenu1: "О нас", subMenu2: "Отправить запрос" },
    {
      title: "Другое",
      subMenu1: "Условия использования",
      subMenu2: "Политика конфиденциальности"
    }
  ];
  return (
    <div className="footer">
      <div className="d-flex gap-4">
        {footerData.map(({ title, subMenu1, subMenu2 }, key) => (
          <div className="d-flex flex-column" key={key}>
            <p className="fs-6 fw-bold">{title}</p>
            <p>{subMenu1}</p>
            <p>{subMenu2}</p>
          </div>
        ))}
      </div>

      <div className="d-flex gap-2  align-self-start ms-2 social-icon">
        <img src={twitterIcon} alt="twitter-icon" />
        <img src={vkontaktIcon} alt="vkontakt-icon" />
      </div>

      <div className="text-center d-flex justify-content-center">
        <img
          className="position-relative py-4"
          src={lineIcon}
          alt="line-icon"
        />
        <img
          className="position-absolute text-center"
          src={starFooterIcon}
          alt="star-icon"
        />
      </div>

      <div className="py-4">
        <img src={copyrightIcon} alt="copyright-icon" />
      </div>
    </div>
  );
}
