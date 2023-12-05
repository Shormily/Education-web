import styles from "./styles.module.css";
import chevronDown from "./chevron-down.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
const Accordions = () => {
    const AccordionItem = ({ header, ...rest }) => (
        <Item
          {...rest}
          header={
            <>
              {header}
              <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
            </>
          }
          className={styles.item}
          buttonProps={{
            className: ({ isEnter }) =>
              `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
          }}
          contentProps={{ className: styles.itemContent }}
          panelProps={{ className: styles.itemPanel }}
        />
      );
    return (
        <>
            <div className="max-w-[1440px] m-auto rounded-lg">
      {/* <ul className={styles.list}>
        <li>
          <a
            href="https://szhsin.github.io/react-accordion/"
            target="_blank"
            rel="noreferrer"
          >
            Doc website
          </a>
        </li>
        <li>
          <a
            href="https://szhsin.github.io/react-accordion/docs/styling#examples"
            target="_blank"
            rel="noreferrer"
          >
            Styled examples
          </a>
        </li>
      </ul>
      <div className={styles.info}>
        ℹ️ When focus is on an accordion header, you may use the{" "}
        <strong>ArrowDown</strong> and <strong>ArrowUp</strong> keys to move
        focus to the next or previous accordion header.
      </div> */}

      <div className={styles.accordion}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion className="shadow-lg mb-12 " transition transitionTimeout={250}>
          <AccordionItem header="What is Lorem Ipsum?" initialEntered>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionItem>

          <AccordionItem header="Where does it come from?">
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
            erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
          </AccordionItem>

          <AccordionItem header="Why do we use it?">
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>  
        </>
    );
};

export default Accordions;