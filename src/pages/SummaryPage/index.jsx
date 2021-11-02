import React from 'react';

const SummaryPage = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
    <form>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        id="confirm-checkbox"/>
      <label htmlFor="confirm-checkbox">주문확인하셨나요?</label>
      <br />
      <button disabled={!checked} type="submit">주문확인</button>
    </form>
     </>
  )
}

export default SummaryPage;