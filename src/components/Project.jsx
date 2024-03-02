function Project(props) {

  return (
        <a class="flex-item" href={props.profileLink} target="_blank" id={props.itemNumber}>
            <div>
                <h3>{props.profession}</h3>
                <span>{props.skill}</span>
            </div>
        </a>
  );
}

export default Project;