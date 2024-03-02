import Project from '../components/Project';
export default function Portfolio() {
  return (
        <section class="page-section" id="work">
      <h1>Portfolio</h1>
            <div class="flex-container">
                <Project profileLink ="https://bespoke-capybara-7e98b6.netlify.app/Portfolio"  itemNumber="item1" profession="Fullstack Developer" skill="HTML, JavaScript, SQL"/>

                <Project profileLink ="https://bespoke-capybara-7e98b6.netlify.app/Portfolio"  itemNumber="item2" profession="Web Developer" skill="HTML, CSS and JavaScript"/>

                <Project profileLink ="https://bespoke-capybara-7e98b6.netlify.app/Portfolio"  itemNumber="item3" profession="Data Analyst" skill="Excel, Python"/>

                <Project profileLink ="https://bespoke-capybara-7e98b6.netlify.app/Portfolio"  itemNumber="item4" profession="Research Associate" skill="Research, data collection"/>

                <Project profileLink ="https://bespoke-capybara-7e98b6.netlify.app/Portfolio"  itemNumber="item5" profession="Placeholder" skill="Placeholder..."/>
            </div>
        </section>

  );
}
