import { Steps } from "antd";



const ActiveLog = () => {
    return (
        <div className="lg:p-20 bg-gray-200">
            <div
            >
                <div className="bg-white rounded-lg flex   justify-center   lg:p-4 lg:w-4/6 lg:mx-auto h-screen">
                    <div className="p-10">
                        <Steps
                            progressDot
                            current={4}
                            direction="vertical"
                            items={[
                                {
                                    title: 'Finished',
                                    description: 'This is a description. This is a description.',
                                },
                                {
                                    title: 'Finished',
                                    description: 'This is a description. This is a description.',
                                },
                                {
                                    title: 'In Progress',
                                    description: 'This is a description. This is a description.',
                                },
                                {
                                    title: 'Waiting',
                                    description: 'This is a description.',
                                },
                                {
                                    title: 'Waiting',
                                    description: 'This is a description.',
                                },
                            ]}
                        />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ActiveLog;