<section>
  <p>
    <span>
      <a href={data.titleHref} target="blank">
        <Img width={1000} height={600} src={data.img} alt={data.alt} />
      </a>
    </span>
    <Link
      href={{
        pathname: "{data.titleHref}",
      }}
    >
      <strong>{data.title}</strong>
    </Link>
    <br />
    This website is owned by
    <Link
      href={{
        pathname: "{data.ownHref}",
      }}
    >
      {data.owner}
    </Link>
    {data.description}
  </p>
</section>;
