import React from "react";

const Modal = (props) => {
  const {
    image_link,
    description,
    features,
    integrations,
    pricing,
    input_output_examples,
  } = props.singleData;
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side font-lato">
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center mx-auto gap-5">
              <div className="p-5 bg-warning rounded-lg">
                <div className="card-body">
                  <h2 className="card-title text-white text-2xl font-semibold mb-3">
                    {description ? description : "Not Found"}
                  </h2>
                  <div className="flex flex-wrap md:flex-nowrap mb-5">
                    <div>
                      {Object.values(pricing || {}).map((value) => (
                        <p className="me-10 text-white font-semibold">{value.plan? value.plan : 'not found'}</p>
                      ))}
                    </div>
                    <div>
                      {Object.values(pricing || {}).map((value) => (
                        <p className="text-white">{value.price? value.price : 'not found'}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between text-white">
                    <div>
                      <h3 className="font-bold text-2xl mb-5">Features</h3>
                        {
                            Object.values(features || {}).map(value => (
                                <li className="ml-5">{value.feature_name? value.feature_name : "not found"}</li>
                            ))
                        }
                    </div>
                    <div>
                     <h3 className="font-bold text-2xl mb-5">Integrations</h3>
                     {
                            Object.values(integrations && integrations || {}).map(value => (
                                <li className="ml-5">{value? value : 'not fonud'}</li>
                            ))
                        }
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* Card With Img */}
                <div className="card w-full bg-neutral">
                  <figure className="px-10 pt-10">
                    <img
                      src={image_link && image_link[0] ? image_link[0] : null}
                      alt=""
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title mb-5">
                      {Object.values(input_output_examples || {}).map(
                        (value) => (
                          <h3 className="text-white">{value.input? value.input : 'not found'}</h3>
                        )
                      )}
                    </h2>
                    <p>
                      {Object.values(input_output_examples || {}).map(
                        (value) => (
                          <p className="text-white">{value.output? value.output : 'not found'}</p>
                        )
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn btn-error">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
