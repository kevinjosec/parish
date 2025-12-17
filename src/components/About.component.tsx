import { Heading, Paragraph } from "@kevinjosec/typekit";

export default function AboutComponent() {
  return (
    <div className="p-4 flex flex-col gap-2 text-justify">
      {/* Page Title */}
      <Heading children="About Us" />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Who We Are */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
          <Heading children="Who We Are" size="xl" />
          <Paragraph children="St. Mary’s Jacobite Syrian Church was established in 2004 to serve the spiritual needs of the Jacobite Syrian Orthodox faithful in the State of Kuwait. Guided by the traditions of the Holy Orthodox Church, the parish stands as a spiritual home where believers come together in worship, prayer, and fellowship." />
        </div>

        {/* Faith & Tradition */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
          <Heading children="Our Faith & Tradition" size="xl" />
          <Paragraph children="As part of the Jacobite Syrian Orthodox Church, our parish upholds the apostolic faith, sacred liturgy, and ancient traditions handed down through generations. Through the Holy Qurbana, sacraments, fasting, and prayers, we seek to deepen our relationship with God and grow in holiness as a community." />
        </div>

        {/* Mission */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
          <Heading children="Our Mission" size="xl" />
          <Paragraph children="The mission of St. Mary’s Jacobite Syrian Church is to witness our Lord Jesus Christ through faithful worship, spiritual formation, and service. We aim to strengthen families, guide the youth, and nurture children in Orthodox faith and values while remaining rooted in love, humility, and unity." />
        </div>

        {/* Community Life */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
          <Heading children="Community Life" size="xl" />
          <Paragraph children="Beyond worship, the parish actively fosters a strong sense of community. Through prayer meetings, spiritual gatherings, youth activities, Sunday School, and charitable initiatives, the church provides opportunities for members to grow together in faith and fellowship." />
        </div>

        {/* Looking Forward (full width) */}
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
          <Heading children="Looking Forward" size="xl" />
          <Paragraph children="As the parish continues to grow, St. Mary’s Jacobite Syrian Church remains committed to serving the spiritual needs of the faithful in Kuwait, preserving Orthodox traditions, and responding to the challenges of modern life with faith, compassion, and hope in Christ." />
        </div>
      </div>
    </div>
  );
}
