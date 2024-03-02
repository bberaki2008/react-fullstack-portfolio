import Project from '../components/Project';
export default function Portfolio() {
  return (
        <section class="page-section" id="work">
      <h1>Portfolio</h1>
            <div class="flex-container">
                <Project profileLink ="https://bberaki2008.github.io/bereketPortfolio/"  itemNumber="item1" profession="Fullstack Developer" skill="HTML, JavaScript, SQL"/>

                <Project profileLink ="https://bberaki2008.github.io/bereketPortfolio/"  itemNumber="item2" profession="Web Developer" skill="HTML, CSS and JavaScript"/>

                <Project profileLink ="https://bberaki2008.github.io/bereketPortfolio/"  itemNumber="item3" profession="Data Analyst" skill="Excel, Python"/>

                <Project profileLink ="https://bberaki2008.github.io/bereketPortfolio/"  itemNumber="item4" profession="Research Associate" skill="Research, data collection"/>

                <Project profileLink ="https://bberaki2008.github.io/bereketPortfolio/"  itemNumber="item5" profession="Placeholder" skill="Placeholder..."/>
            </div>
        </section>

  );
}
