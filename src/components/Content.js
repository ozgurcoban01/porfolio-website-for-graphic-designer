import React from "react";
import "../styles/content.css";
import videoBg from "../assets/backgroundVideo.mp4";
import VideoText from "../assets/videoText.svg";

const Content = () => {
  return (
    <div className="contentDiv">
      <div className="bgVideo">
        <video className="bgVideoV" src={videoBg} autoPlay loop muted></video>
        <div className="videoText">
          <svg
          className="videoTextSvg"
            id="OBJECTS"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1421.732 735.674"
          >
            <path d="m131.432,238.892c-12.276,0-24.689-2.141-37.246-6.423-12.276-3.712-18.41-8.845-18.41-15.412,0-.569.281-.858.858-.858l2.57.858c6.559,4.282,14.835,6.419,24.829,6.419,24.256,0,45.662-5.846,64.216-17.553,18.262-11.411,27.399-22.54,27.399-33.393,0-11.13-7.277-20.259-21.834-27.399-7.991-3.993-15.913-6.848-23.759-8.56-7.854-1.716-15.199-2.57-22.047-2.57-11.418,0-20.699,1.572-27.828,4.711-2.858-.281-4.282-2.141-4.282-5.569,0-3.993,2.999-6.848,8.993-8.56l13.7-2.141c31.677-8.564,56.363-19.621,74.063-33.181,17.693-13.552,26.541-28.751,26.541-45.593,0-8.275-4.707-14.986-14.125-20.122-9.422-5.136-23.694-7.706-42.815-7.706-18.836,0-34.676,1.712-47.518,5.136-6.282,1.431-14.489,3.788-24.617,7.064-10.135,3.287-22.764,7.493-37.891,12.629-28.83,9.706-43.813,14.558-44.952,14.558-4.855,0-7.277-3.424-7.277-10.276,0-3.135.995-5.136,2.995-5.994C56.651,17.553,108.314,6.852,157.977,6.852c57.365,0,86.051,13.984,86.051,41.953,0,14.846-10.135,29.829-30.398,44.952-9.995,7.425-21.189,13.848-33.606,19.268-12.417,5.424-26.048,9.991-40.886,13.7,21.975,1.712,39.527,7.209,52.658,16.482,13.126,9.277,19.694,21.907,19.694,37.888,0,15.412-7.994,28.971-23.972,40.67-15.7,11.414-34.399,17.127-56.085,17.127Zm-92.045,26.97c-4.859,0-9.065-3.853-12.629-11.559-3.572-7.706-5.352-16.698-5.352-26.974,0-37.387,20.692-90.898,62.076-160.543,11.988-22.544,19.974-33.822,23.975-33.822s8.275.93,12.846,2.782c4.563,1.86,6.848,3.64,6.848,5.352,0,.288-.148.717-.429,1.283-61.647,89.338-92.474,155.407-92.474,198.222,0,5.417,1.139,10.701,3.428,15.841,2.281,5.136,3.705,7.706,4.278,7.706-.573,1.135-1.431,1.712-2.566,1.712Z" />
            <path d="m247.881,227.758c-5.713,0-10.917-2.642-15.624-7.918-4.711-5.28-7.064-12.056-7.064-20.335s4.988-21.121,14.983-38.533c9.987-17.124,22.263-32.535,36.817-46.235,14.269-13.415,26.545-20.122,36.821-20.122h4.278c10.557,0,19.549,2.073,26.974,6.206,7.417,4.141,11.13,9.634,11.13,16.482,0,3.147-1.283,4.711-3.853,4.711-.854,0-1.283-.429-1.283-1.283-4.57-10.557-11.559-15.841-20.98-15.841-16.266,0-34.824,13.419-55.653,40.241-20.84,26.264-31.252,46.527-31.252,60.792,0,5.428,1.423,8.135,4.278,8.135,12.846,0,39.816-28.963,80.915-86.909-.288.288-.072.216.642-.213.71-.429,1.351-.642,1.928-.642,1.423,0,4.422,1.431,8.989,4.282,4.563,2.566,6.852,4.855,6.852,6.848-2.289,3.712-4.282,7.425-5.994,11.134-4.57,9.706-8.066,19.196-10.488,28.47-2.429,9.277-3.64,17.336-3.64,24.188,0,15.131,3.705,22.689,11.13,22.689l4.282-.854.858.425c0,2.57-3.572,3.853-10.705,3.853-6.848,0-12.561-3.135-17.124-9.418-4.282-6.559-6.423-15.264-6.423-26.112,0-10.557,1.852-22.263,5.565-35.109-.285.858-1.283,2.429-2.995,4.711-1.712,2.289-4.43,6.282-8.135,11.988-23.406,36.248-41.816,54.37-55.228,54.37Z" />
            <path d="m305.663,415.279c-18.836,0-28.253-9.277-28.253-27.832,0-22.263,16.129-51.523,48.376-87.763,33.674-37.964,70.355-68.217,110.026-90.762.281,0,.429.148.429.429,0,1.431-1.572,3.853-4.711,7.277-96.467,80.197-144.702,138.135-144.702,173.818,0,13.703,5.424,20.551,16.27,20.551,18.836,0,41.247-17.985,67.215-53.945,13.7-18.839,26.112-38.392,37.246-58.655,11.13-20.267,21.117-41.387,29.965-63.359,9.422-22.833,16.486-42.955,21.193-60.367,4.711-17.405,7.064-33.105,7.064-47.093,0-9.987-1.712-16.835-5.136-20.548-37.964,39.672-64.505,73.065-79.632,100.179-4.567,11.988-8.848,17.982-12.842,17.982-8.564,0-12.846-2.57-12.846-7.71,0-1.712,1.499-6.776,4.494-15.195,2.999-8.416,7.205-20.191,12.633-35.322l11.984-32.964c4.282-11.699,6.423-23.117,6.423-34.251v-1.712c0-3.424-.429-5.276-1.283-5.565-.577-.569-2.354-.858-5.352-.858s-4.494-.706-4.494-2.137c0-2.57,2.281-3.857,6.848-3.857,18.262,0,27.399,6.852,27.399,20.551,0,6.571-8.56,30.823-25.687,72.78,9.703-13.7,24.116-30.675,43.24-50.946,19.409-20.551,31.396-30.823,35.963-30.823,0,2.285-1.143,4.567-3.424,6.848,12.842,1.143,19.694,4.001,20.551,8.564.566,3.712.995,7.136,1.283,10.276.281,3.143.429,5.853.429,8.131,0,27.403-9.422,63.651-28.257,108.743-20.836,49.086-46.094,90.614-75.775,124.584-29.681,33.959-55.228,50.95-76.637,50.95Z" />
            <path d="m514.582,238.892c-13.988,0-25.406-7-34.251-20.98-.854-1.423-.854-2.566,0-3.424,9.133,6.571,17.833,9.847,26.116,9.847,19.117,0,36.958-11.559,53.516-34.676,17.124-23.687,25.687-46.808,25.687-69.356,0-8.845-2.999-13.271-8.993-13.271-12.561,0-27.118,12.561-43.669,37.671-16.843,25.122-25.258,44.815-25.258,59.081,0,2.57.998,5.994,2.999,10.276,0,1.431-1.07,1.86-3.211,1.287-2.141-.569-4.214-2.357-6.206-5.352-2-2.999-2.999-7.064-2.999-12.204,0-7.417,1.64-17.405,4.923-29.965,3.28-12.557,8.488-27.115,15.628-43.669l31.252-71.926c6.559-17.693,9.847-30.106,9.847-37.246,0-5.994-2.57-8.989-7.706-8.989l-14.986,2.995c-2,0-2.995-.854-2.995-2.566,0-4.282,5.276-6.423,15.841-6.423,10.841,0,19.117,1.86,24.829,5.565,5.994,3.712,8.993,8.993,8.993,15.841,0,6.571-5.569,20.836-16.698,42.811l-22.263,43.669c8.845-6.275,19.268-9.418,31.252-9.418,19.694,0,29.54,9.566,29.54,28.682,0,21.982-10.56,46.098-31.677,72.355-21.128,26.253-40.962,39.387-59.509,39.387Z" />
            <path d="m624.179,227.758c-5.713,0-10.917-2.642-15.624-7.918-4.711-5.28-7.064-12.056-7.064-20.335s4.988-21.121,14.983-38.533c9.987-17.124,22.263-32.535,36.817-46.235,14.269-13.415,26.545-20.122,36.821-20.122h4.278c10.557,0,19.549,2.073,26.974,6.206,7.417,4.141,11.13,9.634,11.13,16.482,0,3.147-1.283,4.711-3.853,4.711-.854,0-1.283-.429-1.283-1.283-4.57-10.557-11.559-15.841-20.98-15.841-16.266,0-34.824,13.419-55.653,40.241-20.84,26.264-31.252,46.527-31.252,60.792,0,5.428,1.423,8.135,4.278,8.135,12.846,0,39.816-28.963,80.915-86.909-.288.288-.072.216.642-.213.71-.429,1.351-.642,1.928-.642,1.423,0,4.422,1.431,8.989,4.282,4.563,2.566,6.852,4.855,6.852,6.848-2.289,3.712-4.282,7.425-5.994,11.134-4.57,9.706-8.066,19.196-10.488,28.47-2.429,9.277-3.64,17.336-3.64,24.188,0,15.131,3.705,22.689,11.13,22.689l4.282-.854.858.425c0,2.57-3.572,3.853-10.705,3.853-6.848,0-12.561-3.135-17.124-9.418-4.282-6.559-6.423-15.264-6.423-26.112,0-10.557,1.852-22.263,5.565-35.109-.285.858-1.283,2.429-2.995,4.711-1.712,2.289-4.43,6.282-8.135,11.988-23.406,36.248-41.816,54.37-55.228,54.37Z" />
            <path d="m749.613,225.192c-2.57,0-5.424-.717-8.564-2.141-3.143-1.427-4.707-3.139-4.707-5.14,0-4.847,4.707-21.975,14.129-51.375,9.418-29.681,14.129-51.94,14.129-66.786,0-4.563-2-7.129-5.994-7.706-4.001-.569-5.994-1.423-5.994-2.566,0-2.57,2.141-3.857,6.419-3.857,19.12,0,28.686,7.854,28.686,23.55,0,4.567-4.711,21.405-14.129,50.517,15.412-25.114,32.535-42.386,51.375-51.804,4.847-10.276,11.559-15.412,20.122-15.412,8.271,0,12.842.717,13.7,2.141-.288-.281-.858.148-1.712,1.283-.858,1.146-1.86,2.429-2.999,3.853-4.57,6.571-8.564,12.918-11.988,19.052-3.424,6.142-5.284,10.917-5.565,14.341,0,7.706,2.71,12.417,8.135,14.129.569.288,1.211.429,1.925.429.71,0,1.07.288,1.07.858,0,2.285-2.855,3.424-8.56,3.424-5.428,0-10.135-2.141-14.129-6.423-2.289-2.57-3.853-5.352-4.711-8.347-.854-2.999-1.283-5.922-1.283-8.776,0-4.563.71-8.704,2.141-12.417-7.14,5.424-13.559,11.065-19.265,16.911-5.713,5.853-10.993,11.631-15.841,17.34-9.141,11.707-15.488,22.047-19.052,31.036-3.572,8.993-6.07,16.63-7.493,22.905-1.712,6.852-3.143,12.064-4.282,15.628-1.143,3.572-2.995,5.352-5.565,5.352Z" />
            <path d="m865.633,234.181c-7.14,0-13.347-1.283-18.623-3.853-5.284-2.57-7.922-4.995-7.922-7.277,32.82-6.852,49.234-15.127,49.234-24.833,0-1.993-3.853-6.419-11.559-13.271-14.842-13.123-22.263-27.828-22.263-44.098,0-11.699,7.281-23.258,21.834-34.676,15.127-11.988,28.827-17.982,41.099-17.982,1.997,0,5.994,2.999,11.988,8.993s8.993,9.778,8.993,11.342-.717,2.357-2.141,2.357c-3.143-.569-5.713-1.07-7.706-1.499-2-.429-3.428-.642-4.282-.642-12.846,0-26.116,4.707-39.816,14.129-13.419,9.418-20.122,18.984-20.122,28.682,0,1.712,6.704,10.424,20.122,26.116,13.411,15.131,20.122,25.547,20.122,31.252s-4.001,11.278-11.988,16.695c-4.282,2.851-8.776,4.992-13.487,6.423-4.707,1.423-9.201,2.141-13.483,2.141Z" />
            <path d="m476.375,603.21c-6.594,0-9.892-1.647-9.892-4.95,0-1.465,2.38-2.93,7.144-4.396,8.427-2.938,14.93-5.497,19.515-7.691,4.578-2.202,7.6-3.667,9.069-4.403,14.652-12.83,29.491-31.97,44.519-57.433,15.021-25.471,30.041-57.069,45.073-94.816-50.57,53.508-102.784,80.247-156.648,80.247-29.32,0-52.586-7.88-69.804-23.634-17.23-16.118-25.835-36.639-25.835-61.555,0-13.195,1.735-26.2,5.223-39.03,3.477-12.819,8.15-24.731,14.015-35.724,13.191-24.545,30.315-46.899,51.39-67.056,21.068-20.149,45.897-36.639,74.477-49.469,15.753-7.326,31.055-12.455,45.897-15.389,14.838-2.93,28.485-4.4,40.947-4.4,10.625,0,20.422.919,29.407,2.748,8.974,1.837,16.763,4.217,23.36,7.148l9.892-17.04c5.857-8.055,13.191-12.094,21.986-12.094,8.423,0,12.641,1.841,12.641,5.497,0,.74-4.217,5.318-12.641,13.741-4.768,4.768-8.158,8.161-10.169,10.169-2.016,2.019-4.491,4.491-7.421,7.421,4.76,2.938,8.883,6.138,12.367,9.619,3.481,3.485,5.223,5.591,5.223,6.32,0,.368-2.475,3.485-7.421,9.342-4.946,5.869-9.805,11.912-14.565,18.141-13.191,16.858-19.974,27.669-20.335,32.429l1.647,1.647c0,1.837-.919,2.748-2.748,2.748-5.497,0-8.245-5.497-8.245-16.49,0-20.885,5.128-41.771,15.389-62.66-13.559-6.954-28.58-10.443-45.07-10.443-32.979,0-66.327,10.443-100.035,31.332-32.979,20.157-60.462,45.62-82.445,76.398-10.993,15.761-19.06,30.782-24.184,45.073-5.136,14.292-7.698,27.851-7.698,40.674,0,23.452,7.972,42.872,23.911,58.261s37.462,23.087,64.585,23.087c43.232,0,90.139-28.766,140.709-86.298,4.756-5.125,8.697-9.619,11.817-13.468,3.109-3.842,5.402-7.045,6.871-9.611l5.497-15.943c-28.952,5.865-52.491,10.169-70.632,12.914-18.137,2.748-30.873,4.122-38.199,4.122-4.396,0-8.435-2.194-12.094-6.594-3.667-4.396-5.497-10.075-5.497-17.04,0-1.458.733-2.198,2.202-2.198l32.429,3.299c41.771,0,73.649-1.101,95.636-3.299,2.198-7.326,5.128-10.993,8.795-10.993,1.83,0,4.028.645,6.597,1.925,2.558,1.287,5.675,3.022,9.342,5.223l16.49-2.748c2.927,0,4.396,1.097,4.396,3.295,0,1.841-6.043,3.849-18.137,6.047-26.382,66.699-55.884,122.933-88.492,168.742-32.251,46.167-59.001,69.254-80.251,69.254Zm137.414-312.746c2.927-3.659,6.776-9.069,11.54-16.216,4.76-7.144,10.625-16.023,17.591-26.655l-6.047-5.497c-11.73,18.688-19.428,34.817-23.083,48.368Z" />
            <path d="m805.608,491.631c-10.633,0-19.056-4.942-25.285-14.842-2.566-5.125-4.673-10.522-6.32-16.209-1.647-5.679-2.471-12.367-2.471-20.066,0-7.326.824-15.753,2.471-25.281,1.647-9.528,3.754-20.339,6.32-32.433-14.288,23.459-26.2,42.416-35.728,56.894-9.532,14.478-16.858,24.826-21.982,31.051-9.163,12.094-18.509,18.137-28.033,18.137-9.163,0-16.763-3.394-22.81-10.166-6.047-6.78-9.069-14.197-9.069-22.26,0-15.024,8.055-40.306,24.184-75.855,16.118-36.274,24.184-54.772,24.184-55.512l-4.946-9.892c0-1.101,1.279-1.651,3.845-1.651,3.299,0,9.346,1.837,18.141,5.497,9.152,3.667,13.738,6.787,13.738,9.346-1.837,3.667-5.219,10.538-10.166,20.612-4.946,10.082-11.638,23.546-20.062,40.397-16.129,34.08-24.184,56.613-24.184,67.606,0,11.365,2.376,17.036,7.144,17.036,5.857,0,14.292-6.59,25.285-19.785,5.857-7.326,11.354-14.652,16.49-21.986,5.125-7.326,10.443-15.389,15.939-24.18l46.17-74.754c5.497-8.795,11.35-13.191,17.587-13.191,12.455,0,19.048,2.388,19.788,7.144-.74-.729-1.651.368-2.748,3.299-10.264,18.688-19.606,41.224-28.033,67.602-8.063,25.653-12.09,42.879-12.09,51.671,0,22.351,4.028,33.526,12.09,33.526,2.558,0,7.877-3.477,15.939-10.439.733,0,1.101,1.465,1.101,4.396,0,9.52-5.497,14.288-16.49,14.288Zm-60.462-214.909c-6.594,0-11.912-2.012-15.939-6.047,5.497-4.028,11.354-9.069,17.591-15.116,6.225-6.047,12.819-13.647,19.785-22.81.733,0,1.101.74,1.101,2.198l-2.748,13.191c-4.035,19.06-10.633,28.584-19.788,28.584Zm46.17,0c-6.594,0-11.912-2.012-15.939-6.047,5.497-4.028,11.354-9.069,17.591-15.116,6.225-6.047,12.819-13.647,19.785-22.81.733,0,1.101.74,1.101,2.198l-2.748,13.191c-4.035,19.06-10.633,28.584-19.788,28.584Z" />
            <path d="m856.717,485.588c-3.667,0-7.144-1.017-10.443-3.022-3.299-2.012-5.136-4.122-5.497-6.324,0-6.225,6.047-28.212,18.137-65.959,12.094-38.104,18.141-66.684,18.141-85.743,0-5.497-1.291-8.7-3.849-9.619-2.566-.911-5.136-1.279-7.694-1.097-2.566.186-3.849-.638-3.849-2.475,0-3.299,2.748-4.946,8.245-4.946,24.545,0,36.829,10.082,36.829,30.231,0,7.334-8.795,37.193-26.386,89.593,8.059-12.823,16.027-24.643,23.911-35.454,7.877-10.803,15.476-20.791,22.81-29.954,15.021-18.319,25.095-27.483,30.231-27.483.361.368.55.74.55,1.101,0,.368-.277,1.192-.824,2.471-.55,1.287-1.746,3.022-3.576,5.223-39.573,47.639-67.056,88.681-82.445,123.119l-4.946,14.288c-1.469,4.039-4.586,6.051-9.346,6.051Zm113.777,6.043c-10.633,0-19.056-4.942-25.285-14.842-5.865-9.148-8.791-22.89-8.791-41.217,0-17.591,4.756-41.224,14.288-70.909,9.528-29.681,18.691-44.519,27.483-44.519h2.748c12.094,0,18.502,2.388,19.238,7.144-.736-.729-1.647.368-2.748,3.299-5.136,9.163-9.987,19.428-14.565,30.782-4.586,11.361-8.89,23.634-12.918,36.821-8.063,25.653-12.09,42.879-12.09,51.671,0,22.351,4.028,33.526,12.09,33.526,2.202,0,5.402-1.647,9.619-4.942,4.21-3.302,6.134-5.132,5.774-5.497,1.097,0,1.647,1.465,1.647,4.396,0,9.52-5.497,14.288-16.49,14.288Z" />
            <path d="m857.263,735.674c-25.646,0-46.994-7.144-64.034-21.44-17.036-14.288-25.558-34.073-25.558-59.361,0-24.917,14.11-50.016,42.325-75.297,27.851-24.552,62.846-44.345,104.981-59.361,40.674-14.66,81.348-21.986,122.022-21.986,18.688,0,34.627,1.647,47.818,4.95,1.458-4.039,2.198-8.07,2.198-12.094,0-12.451-1.469-21.25-4.396-26.382-14.292,13.187-27.304,19.785-39.026,19.785s-21.986-5.679-30.778-17.036c-8.795-11.722-13.195-23.816-13.195-36.282,0-25.638,14.102-52.214,42.325-79.696,0-21.246,2.198-35.356,6.594-42.321,5.128-7.326,13.741-10.993,25.835-10.993,13.191,0,27.111,12.09,41.771,36.278,26.386,4.764,39.577,14.478,39.577,29.13,0,5.865-2.114,10.355-6.324,13.464-4.214,3.12-6.32,3.025-6.32-.273,3.659-2.558,5.497-5.497,5.497-8.795,0-10.993-8.791-16.49-26.382-16.49.361,1.469.55,3.116.55,4.946v6.597c0,35.173-10.633,66.149-31.879,92.887,5.497,10.264,8.245,24.006,8.245,41.224v5.223c0,1.647-.19,3.386-.55,5.223,15.021,5.853,27.483,13.916,37.375,24.18,10.253,9.892,15.389,19.238,15.389,28.037,0,9.148-2.198,13.741-6.594,13.741-1.101,0-2.019-1.101-2.748-3.302,2.927-4.039,4.396-7.88,4.396-11.54,0-7.698-4.946-15.389-14.838-23.087-9.896-7.698-20.707-13.377-32.429-17.036-4.4,37.003-18.509,72.549-42.325,106.629-23.824,33.708-53.504,60.462-89.042,80.247-35.538,20.149-72.363,30.231-110.478,30.231Zm-9.892-23.087c26.021,0,51.39-4.942,76.124-14.835,24.735-9.9,48.831-25.107,72.279-45.628,45.43-40.306,74.382-85.933,86.844-136.86-4.4-.736-9.619-1.374-15.666-1.921s-12.918-.828-20.612-.828c-34.817,0-69.064,4.403-102.784,13.195-33.708,9.156-62.565,20.696-86.567,34.627-23.998,13.924-43.149,28.94-57.441,45.073-7.322,8.055-12.819,16.49-16.486,25.281-3.659,8.791-5.497,17.219-5.497,25.281,0,15.753,6.138,29.13,18.41,40.123,12.284,10.993,29.407,16.49,51.394,16.49Zm195.671-234.697c12.823,0,24.917-8.974,36.278-26.929l-28.584-68.16c-7.694,7.698-14.565,18.137-20.608,31.332-6.047,13.195-9.072,24.924-9.072,35.181,0,19.056,7.326,28.576,21.986,28.576Zm8.795-134.112c11.722-8.055,23.087-12.09,34.076-12.09h4.4c-4.768-12.094-12.462-18.141-23.087-18.141-10.261,0-15.389,9.896-15.389,29.681v.55Zm32.979,98.938c13.191-19.42,19.788-40.488,19.788-63.211,0-10.257-1.651-19.42-4.95-27.483-6.233,2.198-15.207,6.415-26.932,12.641-11.361,5.869-17.036,10.082-17.036,12.644s9.703,24.374,29.13,65.408Z" />
            <path d="m1171.653,484.487c-29.681,0-44.519-15.571-44.519-46.721,0-12.451,2.832-25.737,8.518-39.85,5.675-14.098,12.728-25.558,21.163-34.35-4.039-6.958-6.047-15.571-6.047-25.835,0-10.621,4.396-20.24,13.191-28.857,8.795-8.602,19.599-12.914,32.429-12.914,23.816,0,39.934,12.462,48.368,37.375,17.219,3.299,25.835,7.334,25.835,12.09,0,5.497-1.841,8.245-5.497,8.245l-13.741-2.198c.361,3.667.634,6.966.824,9.896.178,2.934.273,5.497.273,7.694,0,30.053-7.694,56.981-23.083,80.797-15.393,23.087-34.627,34.627-57.714,34.627Zm-.55-6.597c15.021,0,29.134-11.722,42.325-35.173,13.191-23.816,19.785-46.531,19.785-68.157,0-9.524-1.647-17.222-4.946-23.087-13.559,2.198-28.401,10.815-44.519,25.835,3.656,2.566,6.594,3.762,8.791,3.572,2.202-.182,3.481-.277,3.849-.277,1.83,0,2.748.922,2.748,2.744,0,2.946-2.388,4.403-7.144,4.403-4.039,0-8.617-1.283-13.741-3.849-19.428,22.723-29.134,44.162-29.134,64.311,0,19.785,7.326,29.677,21.986,29.677Zm-6.594-119.269c24.913-18.691,42.131-28.033,51.667-28.033h1.647c-5.136-12.823-14.66-19.238-28.58-19.238-6.237,0-11.365,2.114-15.393,6.32-4.035,4.217-6.966,9.258-8.791,15.116-1.841,5.865-2.748,11.183-2.748,15.939,0,4.4.729,7.694,2.198,9.896Zm15.939-103.884c-6.597,0-11.912-2.008-15.939-6.047,5.497-4.028,11.354-9.069,17.587-15.116,6.229-6.043,12.823-13.647,19.788-22.81.729,0,1.101.74,1.101,2.198l-2.748,13.195c-4.039,19.056-10.633,28.58-19.788,28.58Zm46.17,0c-6.597,0-11.912-2.008-15.939-6.047,5.497-4.028,11.354-9.069,17.587-15.116,6.225-6.043,12.823-13.647,19.788-22.81.729,0,1.097.74,1.097,2.198l-2.748,13.195c-4.035,19.056-10.629,28.58-19.785,28.58Z" />
            <path d="m1281.573,485.588c-3.299,0-6.966-.919-10.993-2.748-4.035-1.83-6.047-4.031-6.047-6.597,0-6.225,6.047-28.212,18.137-65.959,12.094-38.104,18.141-66.684,18.141-85.743,0-5.857-2.57-9.156-7.694-9.892-5.136-.729-7.698-1.83-7.698-3.299,0-3.299,2.748-4.946,8.245-4.946,24.545,0,36.829,10.082,36.829,30.231,0,5.865-6.047,27.483-18.141,64.858,19.788-32.243,41.775-54.415,65.959-66.509,6.225-13.191,14.842-19.785,25.832-19.785,10.625,0,16.49.919,17.591,2.748-.368-.361-1.101.186-2.198,1.647-1.101,1.469-2.388,3.116-3.849,4.946-5.865,8.435-10.993,16.585-15.389,24.461-4.396,7.884-6.783,14.015-7.144,18.41,0,9.896,3.477,15.935,10.443,18.137.729.372,1.553.554,2.471.554.911,0,1.374.364,1.374,1.101,0,2.93-3.667,4.396-10.993,4.396-6.966,0-13.009-2.748-18.137-8.252-2.938-3.291-4.946-6.867-6.047-10.712-1.097-3.849-1.647-7.6-1.647-11.266,0-5.857.911-11.175,2.748-15.943-9.163,6.966-17.408,14.208-24.735,21.713-7.334,7.516-14.11,14.933-20.335,22.26-11.733,15.032-19.883,28.31-24.461,39.85-4.586,11.54-7.789,21.349-9.619,29.404-2.198,8.799-4.035,15.488-5.497,20.066-1.469,4.586-3.845,6.871-7.144,6.871Z" />
          </svg>{" "}
        </div>
      </div>
    </div>
  );
};

export default Content;
