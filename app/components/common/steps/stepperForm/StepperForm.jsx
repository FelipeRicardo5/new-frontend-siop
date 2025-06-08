import React, { useState } from 'react';

export default function StepperForm({
    steps,
    onSubmit,
    finalReview,
    showFinalStep = true,
}) {
    const [step, setStep] = useState(0);
    const isLastStep = step === steps.length;

    const goNext = () => {
        if (step < steps.length) setStep((prev) => prev + 1);
    };

    const goBack = () => {
        if (step > 0) setStep((prev) => prev - 1);
    };

    return (
        <div className="space-y-6">
            {/* Indicador de etapas */}
            <div className="flex justify-center mb-6 mt-10 space-x-3">
                {steps.map((_, index) => (
                    <span
                        key={index}
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold border-2 ${step === index
                                ? "bg-teal-500 text-white border-teal-500"
                                : "text-gray-500 border-gray-300"
                            }`}
                    >
                        {index + 1}
                    </span>
                ))}
                {showFinalStep && (
                    <span
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold border-2 ${isLastStep
                                ? "bg-teal-500 text-white border-teal-500"
                                : "text-gray-500 border-gray-300"
                            }`}
                    >
                        ✓
                    </span>
                )}
            </div>

            {/* Conteúdo dinâmico */}
            {step < steps.length ? (
                <div>{steps[step].content}</div>
            ) : (
                showFinalStep && (
                    <div className="space-y-4">
                        {finalReview}
                        <button
                            onClick={onSubmit}
                            className="w-full bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 transition"
                        >
                            Finalizar
                        </button>
                    </div>
                )
            )}

            {/* Botões de navegação */}
            <div className="flex justify-between gap-4 mt-4">
                <button
                    onClick={goBack}
                    disabled={step === 0}
                    className="bg-gray-400 text-white p-3 rounded-xl hover:bg-gray-500 transition disabled:opacity-30"
                >
                    Voltar
                </button>
                {!isLastStep && (
                    <button
                        onClick={goNext}
                        className="bg-teal-500 text-white p-3 rounded-xl hover:bg-teal-700 transition"
                    >
                        Próximo
                    </button>
                )}
            </div>
        </div>
    );
}
