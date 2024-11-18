/* eslint-disable react/prop-types */

const ProgressBar = ({ progress }) => {
    return (
        <div className="border-2 border-gray-200 rounded-lg p-2 mt-4">
            <h3>Uploading ...</h3>
            <div className="bg-gray-300 w-full h-2 rounded-lg overflow-hidden">
                <div
                    className="bg-blue-600 h-2"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p>{progress}%</p>
        </div>
    )
}

export default ProgressBar