// components/PageTitle.jsx
import { Helmet } from "react-helmet-async";

export default function PageTitle({ title, channel="DropClone" }) {
  return (
    <Helmet>
      <title>{title} | {channel}</title>
    </Helmet>
  );
}