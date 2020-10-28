
export default (req, res) => {
  res.setHeader("Content-Type", "text/xml");
  res.write(`<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>test de flux rss par Quentin Claes</title>
        <link>https://www.quentinclaes.be</link>
        <description>test</description>
        <language>en</language>
        <lastBuildDate>test</lastBuildDate>
    </channel>
  </rss>`);
  res.end();
}