import { useNavigate } from 'react-router-dom';

export const About = () => {
  const goBack = useNavigate();
  return (
    <>
      <h4>
        Hello, this site is dedicated to cooking. You can find many interesting
        and delicious recipes here.
      </h4>
      <div className='title'>Chilli prawn linguine</div>

      <p>
        <span className="step">STEP 1</span> Put a large saucepan of water on to boil.</p>
      <p>
      <span className="step">STEP 2 </span>Finely chop the 100g pancetta, having first removed any rind.
        Finely grate 50g pecorino cheese and 50g parmesan and mix them together.
      </p>
      <p>

      <span className="step">STEP 3 </span> Beat the 3 large eggs in a medium bowl and season with a little
        freshly grated black pepper. Set everything aside.
      </p>
      <p>
      <span className="step">STEP 4 </span>Add 1 tsp salt to the boiling water, add 350g spaghetti and when
        the water comes back to the boil, cook at a constant simmer, covered,
        for 10 minutes or until al dente (just cooked).
      </p>
      <p>
      <span className="step">STEP 5 </span>Squash 2 peeled plump garlic cloves with the blade of a knife,
        just to bruise it.
      </p>
      <p>
      <span className="step">STEP 6 </span>While the spaghetti is cooking, fry the pancetta with the garlic.
        Drop 50g unsalted butter into a large frying pan or wok and, as soon as
        the butter has melted, tip in the pancetta and garlic.
      </p>
      <p>
      <span className="step">STEP 7 </span>Leave to cook on a medium heat for about 5 minutes, stirring
        often, until the pancetta is golden and crisp. The garlic has now
        imparted its flavour, so take it out with a slotted spoon and discard.
      </p>
      <p>
      <span className="step">STEP 8 </span>Keep the heat under the pancetta on low. When the pasta is ready,
        lift it from the water with a pasta fork or tongs and put it in the
        frying pan with the pancetta. Don’t worry if a little water drops in the
        pan as well (you want this to happen) and don’t throw the pasta water
        away yet.
      </p>
      <p>
      <span className="step">STEP 9 </span>Mix most of the cheese in with the eggs, keeping a small handful
        back for sprinkling over later.
      </p>
      <p>
      <span className="step">STEP 10 </span>Take the pan of spaghetti and pancetta off the heat. Now quickly
        pour in the eggs and cheese. Using the tongs or a long fork, lift up the
        spaghetti so it mixes easily with the egg mixture, which thickens but
        doesn’t scramble, and everything is coated.
      </p>
      <p>
      <span className="step">STEP 11 </span>Add extra pasta cooking water to keep it saucy (several
        tablespoons should do it). You don’t want it wet, just moist. Season
        with a little salt, if needed.
      </p>
      <p>
      <span className="step">STEP 12 </span>Use a long-pronged fork to twist the pasta on to the serving
        plate or bowl. Serve immediately with a little sprinkling of the
        remaining cheese and a grating of black pepper. If the dish does get a
        little dry before serving, splash in some more hot pasta water and the
        glossy sauciness will be revived.
      </p>

      <div className='card-image'>
        <img
          src='https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg'
          alt='img'
        />
      </div>
      <button className='btn go-back' onClick={() => goBack(-1)}>
        Back
      </button>
    </>
  );
};
