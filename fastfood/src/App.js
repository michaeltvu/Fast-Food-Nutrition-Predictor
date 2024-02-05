import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NutritionLabel from './NutritionLabel';

const App = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [response, setResponse] = useState(null);
    const [uploadError, setUploadError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentItem, setCurrentItem] = useState(null)
    const [selectedPrediction, setSelectedPrediction] = useState(0);

    const handlePredictionClick = (index) => {
        setCurrentItem(response[index]);
        setSelectedPrediction(index);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setUploadError(null)
        } 
        else {
            setImagePreview(null);
        }
    };

    const handleUpload = async () => {
        // Check if an image is selected
        if (!selectedFile) {
            setUploadError('Please select an image before uploading.');
            return;
        }

        setLoading(true);
    
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);
        
            const response = await fetch('http://localhost:8000/predict', {
                method: 'POST',
                body: formData,
                headers: {
                },
            });

            const responseData = await response.json();
            if (responseData.predictions) {
                setCurrentItem(responseData.predictions[0]);
                setResponse(responseData.predictions);
                setUploadError(null); // Reset the error message
            }
            else {
                setUploadError('Error uploading image')
            }
        } 
        catch (error) {
            console.error('Error uploading image:', error);
            setUploadError('Error uploading image:', error)
            // setUploadError('An error occurred while uploading the image. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className={"container my-5"}>
            <h1 className="mb-4">Fast-Food Nutrition Analyzer</h1>

            <div className="alert alert-info" role="alert">
                <h4 className="alert-heading">How It Works</h4>
                <p>
                    Welcome to the Fast-Food Nutrition Analyzer! Upload a photo of a your fast food item, and our system will analyze it using a Keras model
                    trained on popular fast food items. The model predicts what the item is and provides the nutrition facts for the item.    
                </p>
                <hr />
                <p className="mb-0">
                    Note: This is a an experimental tool. Predictions may not be accurate for all types of images.
                </p>
            </div>

            <div className="row">
                <div className="col-5 mt-4">
                    <h2 className="mb-3">Image Upload</h2>
                    {selectedFile && (
                        <div className="mb-4">
                            <img src={imagePreview} alt="Selected" className="img-fluid w-55" />
                        </div>
                    )}
                    <div className="row">
                        <div className="col-6">
                            <input type="file" className="form-control w-100" accept="image/*" onChange={handleFileChange} />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" onClick={handleUpload}>
                                Upload
                            </button>
                        </div>
                    </div>
                    {uploadError ? (
                        <div className="alert alert-danger mt-4" role="alert">
                            {uploadError}
                        </div>
                    ) : null}
                </div>
                {loading ? (
                    <div className="col mt-4 mx-auto justify-content-center">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : response ? (
                    <div className="col mt-4">
                        <h2>Nutrition Facts</h2>
                        <div className="mb-4">
                            <p>
                            This section displays the nutrition facts for the predicted item. If the prediction doesn't seem accurate, explore the top predictions below.
                            </p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <NutritionLabel item={currentItem} />
                            <div className="list-group list-group-flush">
                                {response.map((prediction, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`list-group-item list-group-item-action list-group-item-sm ${index === selectedPrediction ? 'active' : ''}`}
                                        onClick={() => handlePredictionClick(index)}
                                    >
                                        {prediction.item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col mt-4">
                        <h2>Upload An Image to Get Nutrition Facts</h2>
                        <p>
                            Once you upload an image of your fast food item, our system will analyze it, and you'll receive nutrition facts for the item.
                            Click the "Upload" button to get started!
                        </p>
                    </div>
                )}
            </div>


        </div>
    );
};

export default App;