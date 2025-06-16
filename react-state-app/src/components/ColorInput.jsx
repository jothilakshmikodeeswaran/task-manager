



function ColorInput({ onTextChange }) {
    return (
        <>
            <label htmlFor="color-input">Choose a Color : </label>
            <input type="text" 
            name="color-input" 
            placeholder="Enter a color"
            onChange={(e) => onTextChange(e.target.value)} 
            />
        </>
    )

} export default ColorInput;